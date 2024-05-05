"use client";

import React, { useState } from "react";
import Banner from "../UI/Banner";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import MobileMenu from "../UI/MobileMenu";

function TopHeader() {
  const [isOpen, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Banner isOpen={isOpen} setOpen={setOpen} />
      <div >
      <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header />
    </div>
  );
}

export default TopHeader;
