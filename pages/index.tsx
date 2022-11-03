import * as React from "react";
import Link from "next/link";

const StartPageItems = [
  { title: "Yahtzee", description: "Play the original Yahtzee game", href: "/yahtzee" },
  { title: "Yahtzee Maxi", description: "The extreme version with 6 dice", href: "/yahtzee" },
  { title: "Golf ScoreCard", description: "Keep track on the gold course", href: "/golfscorecard" },
  { title: "Other", description: "TBD", href: "/yahtzee" },
  { title: "Other", description: "TBD", href: "/yahtzee" },
];

const MenuItem = ({ href, title, description }) => {
  return (
    <Link href={href} passHref>
      <div className="relative bg-slate-700 rounded-xl p-8 border-slate-500 border-2 transition-color duration-300 hover:bg-slate-600 cursor-pointer max-h-96  md:aspect-square shadow-xl hover:pt-12">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-convergence text-white mb-2 select-none">{title}</h3>
          {description && (
            <p className="text-sm font-convergence font-bold text-cyan-300 leading-4 select-none">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  function move(e) {
    console.log(e);
    console.log(e?.target);
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-t from-slate-900 to-slate-700 pt-4">
      <div className="px-8 flex flex-col">
        <h1 className="text-8xl self-center mt-4 cursor-pointer" onClick={(e) => move(e)}>
          🎲
        </h1>
        <h1 className="text-4xl font-convergence self-center my-8 text-white">Dice Haven</h1>
      </div>
      <div className="flex justify-center pt-4">
        <div
          className="w-full max-w-7xl grid gap-8 px-8 h-fit"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {StartPageItems.map((item, index) => {
            return <MenuItem href={item.href} key={index} title={item.title} description={item.description} />;
          })}
        </div>
      </div>
    </main>
  );
}
