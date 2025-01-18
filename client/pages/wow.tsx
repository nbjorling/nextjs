import Link from 'next/link';
import { Guild } from '../components/Wow/Wow';

export default function Wow() {
  const a: Guild = {
    id: '123',
    name: 'Test',
    server: 'Test',
    roster: [],
  };

  console.log('Koca: a ', a);

  return (
    <main className='min-h-screen w-full bg-slate-800 pt-4'>
      <Link href='/'>
        <div className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'>
          Back
        </div>
      </Link>
      Projects Main Page
    </main>
  );
}
