import { Pause, Play } from '@phosphor-icons/react';
import Image from 'next/image';
import React, { useRef } from 'react';
import PageLayout from '../components/PageLayout/PageLayout';

export default function MusicPlayer() {
  const audioRef = React.useRef<HTMLAudioElement | undefined>();
  const canvasRef = useRef(null); // to target the canvas
  const source = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleProgressChange = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const progress =
        (audioElement.currentTime / audioElement.duration) * 1000;
      setProgress(progress);
    }
  };

  const handleAudioPlay = () => {
    const audioElement = audioRef.current;
    if (audioElement && audioElement.readyState >= 2) {
      // Check if the audio element is loaded and ready to play
      audioRef.current.play();
      const audioContext = new AudioContext();
      if (!source.current) {
        source.current = audioContext.createMediaElementSource(audioElement);
        const analyser = audioContext.createAnalyser();
        analyserRef.current = analyser;
        source.current.connect(analyser);
        analyser.connect(audioContext.destination);
      }
      visualizeAudio();
    }
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
    }
    setIsPlaying(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = null;
  };

  function visualizeAudio() {
    const canvasContext = canvasRef.current.getContext('2d');

    const renderFrame = () => {
      const frequencyData = new Uint8Array(
        analyserRef.current.frequencyBinCount
      );
      analyserRef.current.getByteFrequencyData(frequencyData);

      const barWidth = (canvasRef.current.width / frequencyData.length) * 1.5; // bar width
      let startX = 0;

      canvasContext.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      for (let i = 0; i < frequencyData.length; i++) {
        startX = i * barWidth + 1;

        const gradient = canvasContext.createLinearGradient(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );

        gradient.addColorStop(0.0, '#fc4a1a');
        gradient.addColorStop(1.0, '#f7b733');

        canvasContext.fillStyle = gradient;
        canvasContext.fillRect(
          startX,
          canvasRef.current.height,
          barWidth,
          -frequencyData[i] * 0.5 // bar height
        );
      }

      animationFrameRef.current = requestAnimationFrame(renderFrame); // Call renderFrame recursively
    };

    renderFrame(); // Start the rendering loop
  }

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleProgressChange();
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  React.useEffect(() => {
    audioRef.current = new Audio('/assets/Saxophone_Dreams.mp3');
  }, []);

  const duration = audioRef.current?.duration || 0;
  const formattedDuration = new Date(duration * 1000)
    .toISOString()
    .substr(14, 5); // Format duration to MM:SS

  const currentTime = audioRef.current?.currentTime || 0;
  const formattedCurrentTime = new Date(currentTime * 1000)
    .toISOString()
    .substr(14, 5); // Format current time to MM:SS

  return (
    <PageLayout>
      <div className=' h-[calc(100vh-64px)] '>
        <div className='grid h-full  grid-cols-1 gap-4 p-4 md:grid-cols-2'>
          <div className='relative flex aspect-square max-h-[400px] w-full max-w-[400px] place-self-center self-end overflow-hidden rounded-2xl border border-orange-500/50 shadow-lg md:place-self-end md:self-start'>
            <canvas
              className='absolute inset-0 z-10 aspect-square h-full w-full opacity-60'
              ref={canvasRef}
            />
            <Image
              className='aspect-square h-full max-h-[400px] w-full max-w-[400px]'
              fill
              quality={80}
              alt='Saxophone Dreams'
              src={'/assets/saxophone_dreams.png'}
            />
          </div>

          <div className='flex h-full w-full flex-col items-center gap-4'>
            <div className='relative z-10  flex w-full  max-w-[400px] justify-between  rounded-2xl bg-gray-900 p-4 shadow-md md:place-self-start'>
              <div className='flex flex-col'>
                <p className=' text-orange-500'>Niklas with Ai</p>
                <p className='text-sm text-white/70'>Saxophone Dreams</p>
              </div>
            </div>
            <div className='relative z-10 flex w-full  max-w-[400px] flex-col  items-center rounded-2xl bg-gray-900 p-4 shadow-md  md:place-self-start'>
              <div className='mb-2 flex w-full justify-between text-sm text-white/80'>
                <p>{formattedCurrentTime}</p>
                <p>{formattedDuration}</p>
              </div>
              <input
                className='w-full cursor-pointer appearance-none rounded-full bg-[#010518] accent-orange-500 transition-all'
                type='range'
                id='progress'
                name='progress'
                min='0'
                max='1000'
                value={progress}
                onChange={(e) => {
                  const audioElement = audioRef.current;
                  if (audioElement) {
                    audioElement.currentTime =
                      (Number(e.target.value) / 1000) * audioElement.duration;
                  }
                }}
              />

              <div className='mt-4'>
                {audioRef.current && isPlaying ? (
                  <button
                    type='button'
                    onClick={handleAudioPause}
                    className='rounded-full bg-[#010518] p-3'
                  >
                    <Pause size={32} />
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={handleAudioPlay}
                    className='rounded-full bg-[#010518] p-3'
                  >
                    <Play size={32} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio />
    </PageLayout>
  );
}
