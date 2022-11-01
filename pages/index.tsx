import * as React from "react";
import Link from "next/link";

const StartPageItems = [
  { title: "Yahtzee", description: "Play the original Yahtzee game", href: "/yahtzee" },
  { title: "Yahtzee Maxi", description: "The extreme version with 6 dice", href: "/yahtzee" },
  { title: "Golf ScoreCard", description: "Keep track on the gold course", href: "/yahtzee" },
  { title: "Other", description: "TBD", href: "/yahtzee" },
  { title: "Other", description: "TBD", href: "/yahtzee" },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-t from-slate-900 to-slate-700 pt-4">
      <div className="px-8 flex flex-col">
        <h1 className="text-8xl self-center mt-">🎲</h1>
        <h1 className="text-4xl font-convergence self-center my-8 text-white">Dice Haven</h1>
      </div>
      {/* <Yahtzee /> */}
      {/* <GolfScoreCard /> */}
      <div className="flex justify-center pt-4">
        <div
          className="w-full max-w-7xl grid gap-8 px-8 h-fit"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {StartPageItems.map((item, index) => {
            return (
              <Link href={item.href} key={index} passHref>
                <div className="relative bg-slate-700 rounded-xl p-8 border-slate-500 border-2 transition-color duration-300 hover:bg-slate-600 cursor-pointer max-h-96  md:aspect-square shadow-xl hover:pt-12">
                  {/* {item.comingSoon && (
                      <div className="flex absolute -left-[5%] w-[110%] top-2/3 p-2">
                        <div className="bg-gradient-to-l py-2 from-cyan-400 via-cyan-300 to-cyan-600 w-full text-center font-convergence">
                          Coming soon!
                        </div>
                      </div>
                    )} */}
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-convergence text-white mb-2 select-none">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm font-convergence font-bold text-cyan-300 leading-4 select-none">
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
  );
}
