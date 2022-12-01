import Link from "next/link";
import * as React from "react";
import { GolfScoreCard } from "../components/Golf/GolfScoreCard";

export default function StartPage() {
  return (
    <main className="w-full min-h-screen bg-slate-800 pt-4">
      <Link href="/">
        <div className="text-white ml-4 mr-4 cursor-pointer bg-slate-700 rounded py-2 px-4 w-fit">
          Back
        </div>
      </Link>
      <GolfScoreCard />
    </main>
  );
}
