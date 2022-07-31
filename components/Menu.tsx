import React, { useEffect, useState } from "react";
import MenuIcon from "../icons/menu_color.svg";

export const Menu = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    console.log("KOCA: Toggling menu");
    setMenu((prevState) => !prevState);
  };

  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="" onClick={() => toggleMenu()}>
        <div className="flex bg-slate-200 p-2">
          <MenuIcon />
        </div>
      </div>
      <div
        className={`fixed z-10 w-full h-screen transition-all ${isMenuOpen ? "-translate-x-0" : "-translate-x-full"}`}
      >
        <div className={"bg-red-300 h-full"}>
          <div className="">Header</div>
          <div className="">Footer</div>
        </div>
      </div>
    </div>
  );
};
