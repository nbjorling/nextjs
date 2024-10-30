import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Head from 'next/head';
import { Menu } from '../components/Menu';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return [
    <Head key='head'>
      <title>Dice Haven</title>
      <meta name='description' content='I am Niklas Björling' />
      <link href='http://fonts.cdnfonts.com/css/convergence' rel='stylesheet' />
      <link rel='icon' href='/favicon.ico' />
    </Head>,
    <div
      className='font-convergence relative h-full min-h-screen'
      data-theme='dark'
      key='render'
    >
      <Analytics />
      <SpeedInsights />
      <div className='h-10'>
        <Menu key='menu' />
      </div>
      <div className={`min-h-[calc(100vh_-_40px)]`}>
        <Component key='component' {...pageProps} />,
      </div>
    </div>,
  ];
}

export default MyApp;
