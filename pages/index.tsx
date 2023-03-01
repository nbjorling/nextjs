import * as React from 'react';
import Link from 'next/link';
import { getRandomEmoji } from '../utils/getRandomEmoji';

const StartPageItems = [
  {
    icon: '🎲',
    title: 'Yahtzee',
    description: 'Play the original Yahtzee game',
    href: '/yahtzee',
  },
  {
    icon: '🎲',
    title: 'Yahtzee Maxi',
    description: 'The extreme version with 6 dice',
    href: '/yahtzee',
  },
  {
    icon: '🧩',
    title: 'Scrum Poker',
    description: 'Cards for scrum poker',
    href: '/scrumpoker',
  },
  {
    icon: '🏌️‍♂️',
    title: 'Golf ScoreCard',
    description: 'Keep track on the gold course',
    href: '/golfscorecard',
  },
  {
    icon: '💾',
    title: 'Projects',
    description: 'Small projects or concepts',
    href: '/projects',
  },
  {
    icon: '🔮',
    title: 'Code Pens',
    description: 'Link to useful codepens',
    href: '/codepens',
  },
  {
    icon: '👨🏼‍🏫',
    title: 'Jeopardy',
    description: 'Jeopardy board',
    href: '/jeopardy',
  },
];

function MenuItem({ href, title, description, icon }) {
  return (
    <Link href={href} passHref>
      <div className='relative aspect-video max-h-96 cursor-pointer overflow-hidden shadow-xl md:aspect-square'>
        <div
          className='absolute -left-[100%]  -top-[100%] z-0 h-[300%] w-[300%] animate-rotate'
          style={{
            background:
              'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '100% 100%',
            transform: 'translateY(0)',
            transformOrigin: '0, 0',
          }}
        />
        <div className='transition-color absolute left-[2px] top-[2px] z-10 h-[calc(100%-4px)] max-h-96  w-[calc(100%-4px)] cursor-pointer bg-slate-800 p-4 duration-300 hover:bg-slate-800  md:aspect-square'>
          <div className='flex h-full flex-col'>
            <h3 className='mb-2 select-none text-center text-4xl'>{icon}</h3>
            <h3 className='mb-2 select-none text-center font-convergence text-2xl text-white'>
              {title}
            </h3>
            {description && (
              <p className='select-none text-center text-sm font-bold leading-4 text-cyan-300'>
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
  const [emoji, setEmoji] = React.useState('');
  const [emojiText, setEmojiText] = React.useState<string>(
    'Click on the emoji to copy it'
  );

  async function copy(e) {
    try {
      await navigator.clipboard.writeText(e.target.innerHTML);
      setEmojiText('Emoji copied to clipboard');
      console.log('Emoji copied to clipboard');
      setTimeout(() => setEmojiText('Click on the emoji to copy it'), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  React.useEffect(() => {
    setEmoji(getRandomEmoji());
  }, []);

  return (
    <main className='flex min-h-screen w-full flex-col bg-gradient-to-t from-[#060b15] to-slate-900 pt-4 font-hyperlegible'>
      <div className='flex flex-col px-8'>
        <h1
          className='mt-4 mb-4 cursor-pointer self-center text-9xl'
          onClick={(e) => copy(e)}
        >
          {emoji}
        </h1>
        <h1 className='mb-2 self-center font-convergence text-2xl text-white'>
          Your spirit emoji
        </h1>
        <p className='self-center font-hyperlegible text-xs text-slate-500 '>
          {emojiText}
        </p>
      </div>
      <div className='flex justify-center pt-8'>
        <div
          className='min-h-40 grid h-fit w-full max-w-7xl gap-4 px-8'
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
