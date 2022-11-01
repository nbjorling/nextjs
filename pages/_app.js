import '../styles/globals.css'
import Head from "next/head";
import { Menu } from "../components/Menu";

function MyApp({ Component, pageProps }) {
  return [
    <Head key="head">
      <title>Dice Haven</title>
      <meta name="description" content="Dice Haven - All Dice Games" />
      <link href="http://fonts.cdnfonts.com/css/convergence" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>,
    <Menu key="menu" />,
    <Component key="component" {...pageProps} />,
  ];
}

export default MyApp
