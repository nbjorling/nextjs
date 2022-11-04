import * as React from "react";
import Link from "next/link";
import { getRandomEmoji } from "../utils/getRandomEmoji";

const StartPageItems = [
  { icon: "🎲", title: "Yahtzee", description: "Play the original Yahtzee game", href: "/yahtzee" },
  { icon: "🎲", title: "Yahtzee Maxi", description: "The extreme version with 6 dice", href: "/yahtzee" },
  { icon: "🏌️‍♂️", title: "Golf ScoreCard", description: "Keep track on the gold course", href: "/golfscorecard" },
  { icon: "💾", title: "Projects", description: "Small projects or concepts", href: "/projects" },
  { icon: "🔮", title: "Code Pens", description: "Link to useful codepens", href: "/codepens" },
];

const MenuItem = ({ href, title, description, icon }) => {
  return (
    <Link href={href} passHref>
      <div className="relative bg-slate-800 rounded-xl p-8 border-slate-500 border-2 transition-color duration-300 hover:bg-slate-700 cursor-pointer max-h-96  md:aspect-square shadow-xl">
        <div className="flex flex-col h-full">
          <h3 className="text-4xl text-center mb-2 select-none">{icon}</h3>
          <h3 className="text-2xl text-center font-convergence text-white mb-2 select-none">{title}</h3>
          {description && (
            <p className="text-sm text-center font-convergence font-bold text-cyan-300 leading-4 select-none">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  const [emoji, setEmoji] = React.useState("");

  function move(e) {
    console.log(e);
    console.log(e?.target);
  }

  React.useEffect(() => {
    setEmoji(getRandomEmoji());
  }, []);

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-t from-slate-900 to-slate-900 pt-4">
      <div className="px-8 flex flex-col">
        <h1 className="text-9xl self-center mt-4 cursor-pointer" onClick={(e) => move(e)}>
          {emoji}
        </h1>
        <h1 className="text-2xl font-convergence self-center my-8 text-white">Your spirit emoji</h1>
      </div>
      <div className="flex justify-center pt-4">
        <div
          className="w-full max-w-7xl grid gap-4 px-8 h-fit"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {StartPageItems.map((item, index) => {
            return (
              <MenuItem
                href={item.href}
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
