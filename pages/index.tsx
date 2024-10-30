import Link from 'next/link';
import * as React from 'react';
import { getRandomEmoji } from '../utils/getRandomEmoji';

export const menuItems = [
  {
    icon: '🎸',
    title: 'Concerts',
    description: `Concerts I've been to`,
    href: '/concerts',
  },
  {
    icon: '🎲',
    title: 'Yahtzee',
    description: 'Play the game',
    href: '/yahtzeeGame',
  },
  {
    icon: '🎲',
    title: 'Yahtzee Scorecard',
    description: 'Just the scorecard',
    href: '/yahtzee',
  },
  {
    icon: '🧩',
    title: 'Scrum Poker',
    description: 'Cards for scrum poker',
    href: '/scrumpoker',
  },
  {
    icon: '💳',
    title: 'Sl Card Calculator',
    description: `Calculate if it is worth to buy monthly card`,
    href: '/slcardcalculator',
  },
  // {
  //   icon: '🏌️‍♂️',
  //   title: 'Golf ScoreCard',
  //   description: 'Keep track on the gold course',
  //   href: '/golfscorecard',
  // },
  // {
  //   icon: '💾',
  //   title: 'Projects',
  //   description: 'Small projects or concepts',
  //   href: '/projects',
  // },
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

];

function MenuItem({ href, title, description, icon }) {
  return (
    <Link href={href} passHref>
      <div
        className='relative cursor-pointer overflow-hidden shadow-xl'
        title={icon + ' - ' + title + ' - ' + description}
      >
        <div className='p-1 ml-4 flex flex-col hover:bg-slate-800 w-fit'>
          <h3 className='select-none font-convergence text-xs text-[#ddd]'>
            <span className='text-[#BBB]'>{`<`}</span>
            <span className='text-[#97CAB5]'>Link </span>
            <span className='text-[#FCCA65] italic'> href</span>
            <span className='text-[#D0646D] italic'>=</span>
            "{href}"
            <span className='text-[#D0646D]'>...</span>
          </h3>
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
    <main className='min-h-screen p-8 w-full bg-gradient-to-t from-[#060b15] to-slate-900 font-hyperlegible'>
      <div className='grid grid-flow-row md:grid-flow-col gap-8 justify-center'>

        <div className='flex h-full w-full p-8 flex-col bg-[#141824] border-[#392A5D] border'>
          <h1
            className='mb-4 cursor-pointer self-center text-9xl'
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

        <div className='flex w-full bg-primary font-mono text-sm h-full'>
          <div className='bg-[#141824] p-8 border-[#392A5D] border h-fit'>
            <span className='text-[#EF9D56]'>const </span>
            <span className='text-[#FCCA65]'>Menu</span>
            <span className='text-[#D0646D]'>: </span>
            <span className='text-[#EF863F]'>React.FC </span>
            <span className='text-[#D0646D]'>{`= `} </span>
            <span className='text-[#BBB]'>() </span>
            <span className='text-[#D0646D]'>{`=> `} </span>
            <span className='text-[#BBB]'>{`{`}</span>
            {menuItems.map((item, index) => (
              <MenuItem
              href={item.href}
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              />
            ))}
            <span className='text-[#BBB]'>{`}`}</span>
          </div>
        </div>

      </div>
    </main>
  );
}
