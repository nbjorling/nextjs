import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { FrameCorners, XSquare } from '@phosphor-icons/react';
import Head from 'next/head';
import React from 'react';
import { Menu } from '../components/Menu';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  const pageRef = React.useRef(null);
  const [fullscreen, setFullscreen] = React.useState(false);

  return (
    <>
      <Head key='head'>
        <title>Dice Haven</title>
        <meta name='description' content='I am Niklas Björling' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className=' relative h-full min-h-screen'
        data-theme='dark'
        key='render'
        ref={pageRef}
      >
        <Analytics />
        <SpeedInsights />
        <div className='fixed bottom-0 z-50 flex h-10 w-screen border-b border-slate-900 bg-slate-900'>
          <Menu key='menu' />
          <button
            type='button'
            aria-label='Toggle Fullscreen'
            className='relative z-10 cursor-pointer px-2 text-white hover:bg-slate-800'
            onClick={() => {
              if (fullscreen) {
                document.exitFullscreen().then(() => {
                  setFullscreen(false);
                });
              } else {
                pageRef.current.requestFullscreen().then(() => {
                  setFullscreen(true);
                });
              }
            }}
          >
            {fullscreen ? <XSquare size={24} /> : <FrameCorners size={24} />}
          </button>
        </div>
        <div className='absolute h-full min-h-screen w-screen pb-10'>
          <Component key='component' {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
