import Link from 'next/link';
import * as React from 'react';
import { menuItems } from '../pages';
function LinkElement({ href, title, toggleMenu, icon }) {
  return (
    <Link href={href} passHref>
      <div onClick={() => toggleMenu()} className='text-md mb-2 cursor-pointer'>
        <div className='mb-2 select-none hover:text-cyan-200'>
          <span className='mr-2'>{icon}</span>
          {title}
        </div>
      </div>
    </Link>
  );
}

export function Menu() {
  const [isMenuOpen, setMenu] = React.useState(false);
  const menuRef = React.useRef(null);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div className={`app-menu relative ${isMenuOpen ? 'menu-open' : ''}`}>
      <div
        className='relative z-[5] cursor-pointer select-none'
        onClick={() => toggleMenu()}
      >
        <div className='flex border-b border-slate-900 bg-slate-900 p-2 pl-8 text-white shadow-lg'>
          {isMenuOpen ? '🍔 Close Menu' : '🍔 Menu'}
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed bottom-0 w-full transition-all ease-in-out ${
          isMenuOpen
            ? '-translate-y-[40px]'
            : `-translate-y-[${menuRef.current?.clientHeight}px]`
        }`}
        style={{
          transform: `translateY(${
            isMenuOpen
              ? '-40px'
              : `${menuRef.current?.clientHeight || 1000 - 40}px`
          })`,
        }}
      >
        <div className='relative h-full flex-row border-y border-y-slate-800 bg-slate-900/40 text-white backdrop-blur-md'>
          <div className='p-10'>
            {menuItems.map((menuItem) => {
              return (
                <LinkElement
                  key={menuItem.href}
                  toggleMenu={toggleMenu}
                  href={menuItem.href}
                  icon={menuItem.icon}
                  title={menuItem.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
