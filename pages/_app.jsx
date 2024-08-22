import Head from 'next/head';
import { Menu } from '../components/Menu';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return [
    <Head key='head'>
      <title>Dice Haven</title>
      <meta name='description' content='Dice Haven - All Dice Games' />
      <link href='http://fonts.cdnfonts.com/css/convergence' rel='stylesheet' />
      <link rel='icon' href='/favicon.ico' />
    </Head>,
    <div className='relative h-full min-h-screen font-convergence' key='render'>
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
