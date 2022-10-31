import Link from "next/link";
import * as React from "react";
import { Yahtzee } from "../components/Yahtzee/Yahtzee";
import { Menu } from "../components/Menu";

export default function StartPage() {
  return (
    <main className="w-full min-h-screen bg-slate-800">
      <Menu />
      <Link href="/">
        <div className="text-white ml-4 mr-4 cursor-pointer bg-slate-700 rounded py-2 px-4 w-fit">Back</div>
      </Link>
      <Yahtzee />
    </main>
  );
}
