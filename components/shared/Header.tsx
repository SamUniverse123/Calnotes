import React from 'react'
import NavBar from './NavBar'


function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800 border-b-4 border-black">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <a className="flex-none text-xl font-semibold dark:text-white" href="#">Calnotes</a>
    <div className="flex flex-row items-center gap-5 mt-5  mr-10 sm:justify-end sm:mt-0 sm:ps-5 ">
      <NavBar />
    </div>
    <div>cart</div>
  </nav>
</header>
  )
}

export default Header
