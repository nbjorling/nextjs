import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function StartPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-13T15:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const main = useRef<HTMLImageElement>(null);

  const setFullscreen = () => {
    if (main.current) {
      main.current.requestFullscreen();
    }
  };

  return (
    <main
      className='absolute inset-0 z-10 h-screen min-h-screen w-full bg-slate-800 font-mono'
      ref={main}
    >
      <button
        className='absolute left-0 top-0 z-50 h-10 w-10'
        type='button'
        onClick={setFullscreen}
      />
      <div className='relative h-screen w-screen'>
        <Image
          alt='snow'
          src='/images/snow.jpg'
          width={2560}
          height={1440}
          className='cover-fill absolute z-0 h-full w-full'
        />

        <div className='relative z-30 flex h-screen items-center justify-center bg-center'>
          <div className='rounded-xl bg-black/50 p-20 text-center font-bold text-black backdrop-blur-sm'>
            <h1 className='mb-8 block font-mono text-[14rem]  text-green-500'>
              x-mas party!
            </h1>
            <div className='flex justify-center gap-32 text-[4rem] font-bold text-white drop-shadow-lg'>
              <div>
                <span className='mb-8 block text-[12rem]'>
                  {timeLeft.days.toString().padStart(2, '0')}
                </span>
                days
              </div>

              <div>
                <span className='mb-8 block text-[12rem]'>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </span>
                hours
              </div>

              <div>
                <span className='mb-8 block text-[12rem]'>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                minutes
              </div>

              <div>
                <span className='mb-8 block text-[12rem] text-red-500'>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
