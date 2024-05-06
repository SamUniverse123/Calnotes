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
    <header className="w-full py-4 text-sm bg-white border-b-4 border-black sm:hidden dark:bg-neutral-800 ">
      <nav
        className="max-w-[85rem] w-full mx-1 sm:mx-auto px-4 flex items-center sm:justify-between"
        aria-label="Global"
      >
        <Link
          className="flex-none text-3xl font-semibold sm:pr-0 dark:text-white"
          href="/"
        >
          Calnotes
        </Link>

        <div className="flex flex-row items-center gap-5 sm:mr-10 sm:justify-end sm:mt-0 sm:ps-5 ">
          {menuOpen ? (
            <>
              <X
                className="absolute sm:hidden right-3 "
                onClick={() => {
                  setMenuOpen(false);
                }}
              />
              
            </>
          ) : (
            <Menu
              className="absolute sm:hidden right-3"
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
