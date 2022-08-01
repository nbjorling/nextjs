import Head from 'next/head'
import Image from "next/image";
import dynamic from "next/dynamic";

import { Scoreboard } from "../components/Scoreboard.tsx";
import { Menu } from "../components/Menu.tsx";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className="p-2 flex flex-col w-full">
        <Scoreboard />
      </main>

      <footer className="flex w-full bg-slate-300 items-center border-t-2 p-8 border-slate-700">
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2 z-0">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
