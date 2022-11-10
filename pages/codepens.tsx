import Link from "next/link";
import * as React from "react";
import { Yahtzee } from "../components/Yahtzee/Yahtzee";

const LinkEl = ({ href, text }) => {
  return (
    <li className="mb-2">
      <a className="hover:text-teal-300" href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
};

export default function StartPage() {
  return (
    <main className="w-full min-h-screen bg-slate-800 pt-4 font-convergence">
      <Link href="/">
        <div className="text-white ml-4 mr-4 cursor-pointer bg-slate-700 rounded py-2 px-4 w-fit">Back</div>
      </Link>
      <div className="p-8">
        <h1 className="text-6xl mb-4 text-white font-convergence">Code Pens</h1>
        <ul className="text-white ml-4 font-hyperlegible">
          <LinkEl
            href="https://codepen.io/nbjorling/pen/abGaQpK"
            text="Horizontal Scrollable 2 Row Grid in Tailwind CSS"
          />
          <LinkEl
            href="https://codepen.io/nbjorling/pen/eYrLPyz"
            text="Horizontal Scrollable 2 Row Grid
          "
          />
          <LinkEl
            href="https://codepen.io/nbjorling/pen/NWMGMVJ"
            text="First/Last of type for single and multiple children"
          />
          <LinkEl href="https://codepen.io/nbjorling/pen/LYmpBRa" text="Animated Accordion, Dynamic Children" />
        </ul>
      </div>
    </main>
  );
}
