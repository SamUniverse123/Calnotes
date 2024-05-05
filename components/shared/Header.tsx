import React, { useState } from "react";
import NavBar from "./NavBar";
import Link from "next/link";


function Header() {
  

  return (
    <header className=" hidden sm:block w-full bg-white text-sm py-4 dark:bg-neutral-800 border-b-4 border-black ">
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
            <NavBar />
          </div>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              className="hidden sm:block transition hover:scale-110 ease-out duration-500 hover:opacity-75 active:scale-50 "
            >
              <path d="M212.31-100q-29.92 0-51.12-21.19Q140-142.39 140-172.31v-455.38q0-29.92 21.19-51.12Q182.39-700 212.31-700H300q0-74.92 52.54-127.46Q405.08-880 480-880q74.92 0 127.46 52.54Q660-774.92 660-700h87.69q29.92 0 51.12 21.19Q820-657.61 820-627.69v455.38q0 29.92-21.19 51.12Q777.61-100 747.69-100H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM480-420q74.92 0 127.46-52.54Q660-525.08 660-600h-60q0 50-35 85t-85 35q-50 0-85-35t-35-85h-60q0 74.92 52.54 127.46Q405.08-420 480-420ZM360-700h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
            </svg>
          </Link>
        
      </nav>
    </header>
  );
}

export default Header;
