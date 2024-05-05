import Link from "next/link";
import React, { useState } from "react";

import { X, Menu } from "lucide-react";
import MobileMenu from "../UI/MobileMenu";


type props = {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileHeader({menuOpen, setMenuOpen} : props) {
    

  return (
    <header className="sm:hidden w-full bg-white text-sm py-4 dark:bg-neutral-800 border-b-4 border-black ">
      <nav
        className="max-w-[85rem] w-full mx-1 sm:mx-auto px-4 flex items-center sm:justify-between"
        aria-label="Global"
      >
        <Link
          className=" sm:pr-0 flex-none text-3xl font-semibold dark:text-white"
          href="/"
        >
          Calnotes
        </Link>

        <div className="flex flex-row items-center gap-5  sm:mr-10 sm:justify-end sm:mt-0 sm:ps-5 ">
          {menuOpen ? (
            <>
              <X
                className="sm:hidden absolute right-3 "
                onClick={() => {
                  setMenuOpen(false);
                }}
              />
              
            </>
          ) : (
            <Menu
              className="sm:hidden absolute right-3"
              onClick={() => {
                setMenuOpen(true);
              }}
            />
          )}
          
        </div>
      </nav>
    </header>
  );
}

export default MobileHeader;
