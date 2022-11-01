import Link from "next/link";
import React, { useEffect, useState } from "react";

const LinkElement = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <a className="text-xl cursor-pointer mb-2 pl-0 hover:pl-1 transition-all">
        <div className="hover:text-cyan-200 select-none">{title}</div>
      </a>
    </Link>
  );
};

export const Menu = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div className={`app-menu font-convergence  ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="" onClick={() => toggleMenu()}>
        <div className="flex bg-slate-900 text-white border-slate-900 shadow-lg border-b pl-8 p-2 cursor-pointer select-none">
          {isMenuOpen ? "Close Menu" : "Menu"}
        </div>
      </div>
      <div
        className={`fixed z-10 w-[300px] h-screen transition-all ${
          isMenuOpen ? "-translate-x-[calc(100%-300px)]" : "-translate-x-full"
        }`}
      >
        <div className={"bg-slate-900 border-t-slate-600 border-t h-full  text-white flex-row relative"}>
          <div className="p-10">
            <LinkElement href="/" title="Start page" />
            <LinkElement href="/yahtzee" title="Yahtzee" />
          </div>
          <div className="absolute bottom-8 w-full h-12 bg-slate-900 flex shadow-lg">
            <div className="text-center items-center w-full p-2">Made By Björling</div>
          </div>
        </div>
      </div>
    </div>
  );
};
