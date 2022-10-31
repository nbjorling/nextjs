import Link from "next/link";
import React, { useEffect, useState } from "react";

const LinkElement = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="text-xl cursor-pointer mb-2 pl-0 hover:pl-1 transition-all">
        <div className="hover:text-cyan-200 select-none">{title}</div>
      </div>
    </Link>
  );
};

export const Menu = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div className={`app-menu font-convergence pb-4 ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="" onClick={() => toggleMenu()}>
        <div className="flex bg-slate-700 text-white border-slate-500 border-b pl-8 p-2 cursor-pointer select-none">
          {isMenuOpen ? "Close Menu" : "Menu"}
        </div>
      </div>
      <div
        className={`fixed z-10 w-[300px] h-screen transition-all ${
          isMenuOpen ? "-translate-x-[calc(100%-300px)]" : "-translate-x-full"
        }`}
      >
        <div className={"bg-slate-700 h-full  text-white flex-row relative"}>
          <div className="p-10">
            <LinkElement href="/" title="Start page" />
            <LinkElement href="/yahtzee" title="Yahtzee" />
          </div>
          <div className="absolute bottom-8 w-full h-12 bg-slate-600 flex">
            <div className="text-center items-center w-full p-2">Made By Björling</div>
          </div>
        </div>
      </div>
    </div>
  );
};
