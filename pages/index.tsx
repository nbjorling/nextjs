import * as React from "react";
import Link from "next/link";
import { getRandomEmoji } from "../utils/getRandomEmoji";

const StartPageItems = [
  {
    icon: "🎲",
    title: "Yahtzee",
    description: "Play the original Yahtzee game",
    href: "/yahtzee",
  },
  {
    icon: "🎲",
    title: "Yahtzee Maxi",
    description: "The extreme version with 6 dice",
    href: "/yahtzee",
  },
  {
    icon: "🧩",
    title: "Scrum Poker",
    description: "Cards for scrum poker",
    href: "/scrumpoker",
  },
  {
    icon: "🏌️‍♂️",
    title: "Golf ScoreCard",
    description: "Keep track on the gold course",
    href: "/golfscorecard",
  },
  {
    icon: "💾",
    title: "Projects",
    description: "Small projects or concepts",
    href: "/projects",
  },
  {
    icon: "🔮",
    title: "Code Pens",
    description: "Link to useful codepens",
    href: "/codepens",
  },
];

function MenuItem({ href, title, description, icon }) {
  return (
    <Link href={href} passHref>
      <div className="relative overflow-hidden aspect-video md:aspect-square max-h-96 shadow-xl cursor-pointer">
        <div
          className="absolute z-0  -left-[100%] -top-[100%] w-[300%] h-[300%] animate-rotate"
          style={{
            background:
              "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            backgroundSize: "100% 100%",
            transform: "translateY(0)",
            transformOrigin: "0, 0",
          }}
        />
        <div className="absolute z-10 left-[2px] top-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] bg-slate-800  p-4 transition-color duration-300 hover:bg-slate-800 cursor-pointer max-h-96  md:aspect-square">
          <div className="flex flex-col h-full">
            <h3 className="text-4xl text-center mb-2 select-none">{icon}</h3>
            <h3 className="text-2xl text-center font-convergence text-white mb-2 select-none">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-center font-bold text-cyan-300 leading-4 select-none">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [emoji, setEmoji] = React.useState("");
  const [emojiText, setEmojiText] = React.useState<string>(
    "Click on the emoji to copy it"
  );

  async function copy(e) {
    try {
      await navigator.clipboard.writeText(e.target.innerHTML);
      setEmojiText("Emoji copied to clipboard");
      console.log("Emoji copied to clipboard");
      setTimeout(() => setEmojiText("Click on the emoji to copy it"), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  React.useEffect(() => {
    setEmoji(getRandomEmoji());
  }, []);

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-t from-[#060b15] to-slate-900 pt-4 font-hyperlegible">
      <div className="px-8 flex flex-col">
        <h1
          className="text-9xl self-center mt-4 cursor-pointer mb-4"
          onClick={(e) => copy(e)}
        >
          {emoji}
        </h1>
        <h1 className="text-2xl font-convergence self-center mb-2 text-white">
          Your spirit emoji
        </h1>
        <p className="text-xs text-slate-500 font-hyperlegible self-center ">
          {emojiText}
        </p>
      </div>
      <div className="flex justify-center pt-8">
        <div
          className="w-full max-w-7xl grid gap-4 px-8 h-fit min-h-40"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {StartPageItems.map((item, index) => (
            <MenuItem
              href={item.href}
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
