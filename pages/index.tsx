import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import { Menu } from "../components/Menu";

const StartPageItems = [
  { title: "Yahtzee", description: "Play the original Yahtzee game", href: "/yahtzee" },
  { title: "Yahtzee Maxi", href: "/yahtzee", comingSoon: true },
  { title: "Gold ScoreCard", href: "/yahtzee", comingSoon: true },
  { title: "Other", href: "/yahtzee", comingSoon: true },
  { title: "Other", href: "/yahtzee", comingSoon: true },
  { title: "Other", href: "/yahtzee", comingSoon: true },
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dice Heaven</title>
        <meta name="description" content="Dice Heaven - All Dice Games" />
        <link href="http://fonts.cdnfonts.com/css/convergence" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full min-h-screen bg-slate-800">
        <Menu />
        {/* <Yahtzee /> */}
        {/* <GolfScoreCard /> */}
        <div className="flex justify-center pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lf:grid-cols-5 xl:grid-cols-6 gap-8 px-8  h-fit">
            {StartPageItems.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  <div className="relative bg-slate-700 rounded-lg p-8 border-slate-500 border-2 transition-color duration-300 hover:bg-slate-600 cursor-pointer max-h-96  md:aspect-square shadow-xl min-w-[200px]">
                    {item.comingSoon && (
                      <div className="flex absolute -left-[5%] w-[110%] top-2/3 p-2">
                        <div className="bg-gradient-to-l py-2 from-cyan-400 via-cyan-300 to-cyan-600 w-full text-center font-convergence">
                          Coming soon!
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-convergence text-white mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm font-convergence font-bold text-cyan-300 leading-4 ">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
