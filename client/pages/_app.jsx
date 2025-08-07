import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Head from 'next/head';
import { Menu } from '../components/Menu';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
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
      >
        <Analytics />
        <SpeedInsights />
        <div className='fixed bottom-0 z-50 h-10 w-screen'>
          <Menu key='menu' />
        </div>
        <div className='absolute h-full min-h-screen w-screen pb-10'>
          <Component key='component' {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
