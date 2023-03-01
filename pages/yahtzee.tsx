import Link from 'next/link';
import * as React from 'react';
import { Yahtzee } from '../components/Yahtzee/Yahtzee';

export default function StartPage() {
  return (
    <main className='min-h-screen w-full bg-slate-900 pt-4'>
      <Link href='/'>
        <div className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'>
          Back
        </div>
      </Link>
      <Yahtzee />
    </main>
  );
}
