/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import Snowfall from 'react-snowfall';

declare global {
  interface Window {
    fitText: (
      el: HTMLElement | HTMLElement[],
      kompressor?: number,
      options?: { minFontSize?: number; maxFontSize?: number }
    ) => void;
  }
}

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

  // const snowFlake1 = useMemo(() => {
  //   if (typeof window === 'undefined') return null;
  //   const internalSnowflake1 = document.createElement('img');
  //   internalSnowflake1.src = '../src/w_favicon.svg';
  //   return internalSnowflake1;
  // }, []);

  const snowImgRef = useRef<HTMLImageElement>(null);
  const snowImgRef2 = useRef<HTMLImageElement>(null);
  const snowImgRef3 = useRef<HTMLImageElement>(null);
  const main = useRef<HTMLImageElement>(null);

  const setFullscreen = () => {
    if (main.current) {
      main.current.requestFullscreen();
    }
  };

  const imgSize = 48;

  return (
    <main
      className='absolute inset-0 z-10 h-screen min-h-screen w-full bg-slate-800 font-mono'
      ref={main}
    >
      <iframe
        src='https://www.youtube.com/embed/L_LUpnjgPso?&autoplay=1&loop=1'
        allow='autoplay'
        className='absolute inset-0 z-0 h-full w-full'
      ></iframe>
      <button
        className='absolute left-0 top-0 z-50 h-10 w-10'
        type='button'
        onClick={setFullscreen}
      />
      <img
        ref={snowImgRef}
        src='/images/w_favicon.svg'
        width={imgSize}
        height={imgSize}
        className='hidden'
      />
      <img
        ref={snowImgRef2}
        src='/images/m_logo.png'
        width={imgSize}
        height={imgSize}
        className='hidden'
      />
      <img
        ref={snowImgRef3}
        src='/images/mybet_logo.png'
        width={imgSize}
        height={imgSize}
        className='hidden'
      />
      <div className='absolute inset-0 z-40'>
        {snowImgRef.current && snowImgRef2.current && snowImgRef3.current && (
          <Snowfall
            color='white'
            snowflakeCount={30}
            images={[
              snowImgRef.current,
              snowImgRef2.current,
              snowImgRef3.current,
            ]}
            radius={[32, 48]}
            rotationSpeed={[0.2, 0.5]}
          />
        )}
      </div>
      <div className='relative z-30 flex h-screen items-center justify-center bg-black/20 bg-center backdrop-blur-md'>
        <div className='rounded-xl p-10 text-center text-white'>
          <h1 className='mb-8text-red-500 mb-5 block font-mono text-[10rem] font-black text-red-500'>
            x-mas party!
          </h1>
          <div className='text-[4] flex justify-center gap-16 text-7xl drop-shadow-lg'>
            <div>
              <span className='mb-8 block'>{timeLeft.days}</span> days
            </div>
            <div>:</div>
            <div>
              <span className='mb-8 block'>{timeLeft.hours}</span> hours
            </div>
            <div>:</div>
            <div>
              <span className='mb-8 block'>{timeLeft.minutes}</span> minutes
            </div>
            <div>:</div>
            <div>
              <span className='mb-8 block'>{timeLeft.seconds}</span> seconds
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
