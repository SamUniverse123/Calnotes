"use client";

import React, { useState } from "react";
import Banner from "../UI/Banner";
import Header from "./Header";

function TopHeader() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div>
      <Banner isOpen={isOpen} setOpen={setOpen} />
      <Header />
    </div>
  );
}

export default TopHeader;
