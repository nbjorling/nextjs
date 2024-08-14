import Link from 'next/link';
import { useState } from 'react';
import DiceRoller from '../components/DiceRoller/DiceRoller';
import { Yahtzee } from '../components/Yahtzee/Yahtzee';

export default function StartPage() {
  const [showDiceRoller, setShowDiceRoller] = useState(true);
  return (
    <main className='min-h-screen w-full bg-slate-900 pt-4'>
      <div className='flex'>
        <Link href='/'>
          <div className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'>
            Back
          </div>
        </Link>
        <button
          type='button'
          className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'
          onClick={() => setShowDiceRoller(!showDiceRoller)}
        >
          Dice Roller
        </button>
      </div>
      {showDiceRoller && <DiceRoller />}
      <Yahtzee />
    </main>
  );
}
