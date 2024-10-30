import Link from 'next/link';
import * as React from 'react';
import { getRandomEmoji } from '../utils/getRandomEmoji';

const StartPageItems = [
  {
    icon: '🎲',
    title: 'Yahtzee Scorecard',
    description: 'Just the scorecard',
    href: '/yahtzee',
  },
  {
    icon: '🎲',
    title: 'Yahtzee',
    description: 'Play the game',
    href: '/yahtzeeGame',
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
  {
    icon: '👨🏼',
    title: 'Jeopardy Answers',
    description: 'Jeopardy Answers',
    href: '/jeopardyAnswers',
  },
  {
    icon: '🎸',
    title: 'Concerts',
    description: `Concerts I've been to`,
    href: '/concerts',
  },
  {
    icon: '💳',
    title: 'Sl Card Calculator',
    description: `Calculate if it is worth to buy monthly card`,
    href: '/slcardcalculator',
  },
];

function MenuItem({ href, title, description, icon }) {
  return (
    <Link href={href} passHref>
      <div
        className='relative max-h-12 cursor-pointer overflow-hidden rounded-lg p-1 shadow-xl hover:bg-slate-700'
        title={description}
      >
        <div className='flex h-full flex-col'>
          <h3 className='select-none font-convergence text-sm text-white'>
            <span className='mr-2'>{icon}</span>
            {title}
          </h3>
          {/* {description && (
            <p className='select-none text-center text-sm font-bold leading-4 text-cyan-300'>
              {description}
            </p>
          )} */}
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
    <main className='flex min-h-screen w-full flex-col bg-gradient-to-t from-[#060b15] to-slate-900 pt-4 font-hyperlegible md:flex-row'>
      <div className='flex w-full flex-col px-8'>
        <h1
          className='mt-4 mb-4 cursor-pointer self-center text-9xl'
          onClick={(e) => copy(e)}
        >
          {emoji}
        </h1>
        <h1 className='text-md mb-2 self-center font-convergence text-white'>
          Your spirit emoji
        </h1>
        <p className='self-center font-hyperlegible text-xs text-slate-500 '>
          {emojiText}
        </p>
      </div>

      <div className='flex w-full justify-center pt-8'>
        <div className=''>
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
