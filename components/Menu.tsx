import React, { useEffect, useState } from "react";
import MenuIcon from "../icons/menu_black.svg";

export const Menu = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    console.log("KOCA: Toggling menu");
    setMenu((prevState) => !prevState);
  };

  return (
    <div className={`app-menu font-convergence ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="" onClick={() => toggleMenu()}>
        <div className="flex bg-slate-300 p-2">
          {/* <MenuIcon /> */}
          Menu
        </div>
      </div>
      <div
        className={`fixed z-10 w-full h-screen transition-all ${isMenuOpen ? "-translate-x-0" : "-translate-x-full"}`}
      >
        <div className={"bg-gray-700 h-full  text-white flex-row relative"}>
          <div className="p-10">
            <div>Yathzee</div>
            <div>Yathzee Extreme</div>
          </div>
          <div className="absolute bottom-8 w-full h-12 bg-slate-600 flex">
            <div className="text-center items-center w-full p-2">Made By Björling</div>
          </div>
        </div>
      </div>
    </div>
  );
};
