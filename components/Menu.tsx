import Link from 'next/link';
import * as React from 'react';

function LinkElement({ href, title, toggleMenu }) {
  return (
    <Link href={href} passHref>
      <div onClick={() => toggleMenu()} className='mb-2 cursor-pointer text-xl'>
        <div className='mb-2 select-none hover:text-cyan-200'>{title}</div>
      </div>
    </Link>
  );
}

export function Menu() {
  const [isMenuOpen, setMenu] = React.useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div
      className={`app-menu font-convergence  ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className='' onClick={() => toggleMenu()}>
        <div className='flex cursor-pointer select-none border-b border-slate-900 bg-slate-900 p-2 pl-8 text-white shadow-lg'>
          {isMenuOpen ? '🍔 Close Menu' : '🍔 Menu'}
        </div>
      </div>
      <div
        className={`fixed z-50 h-screen w-[300px] transition-all ease-in-out ${
          isMenuOpen ? '-translate-x-[calc(100%-300px)]' : '-translate-x-full'
        }`}
      >
        <div className='relative h-full flex-row border-t  border-t-slate-600 bg-slate-900 text-white'>
          <div className='p-10'>
            <LinkElement
              toggleMenu={toggleMenu}
              href='/'
              title='🏠 Start page'
            />
            <LinkElement
              toggleMenu={toggleMenu}
              href='/yahtzee'
              title='🎲 Yahtzee'
            />
            <LinkElement
              toggleMenu={toggleMenu}
              href='/scrumpoker'
              title='🧩 Scrum Poker'
            />
            <LinkElement
              toggleMenu={toggleMenu}
              href='/projects'
              title='🔮  Projects'
            />
            <LinkElement
              toggleMenu={toggleMenu}
              href='/codepens'
              title='💾 Code Pens'
            />
            <LinkElement
              toggleMenu={toggleMenu}
              href='/jeopardy'
              title='👨🏼‍🏫 Jeopardy'
            />
          </div>
          <div className='absolute bottom-8 flex h-12 w-full bg-slate-900 shadow-lg'>
            <div className='w-full items-center p-2 text-center'>
              Made By Björling
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
