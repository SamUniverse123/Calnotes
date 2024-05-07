import { cn } from "@/lib/utils";
import React from "react";

interface props{
  menuOpen: boolean,
  setMenuOpen : React.Dispatch<React.SetStateAction<boolean>>
}

function MobileMenu({menuOpen,setMenuOpen}:props) {
  return (
    <>
    {menuOpen && (
    <div  className="bg-white border-b-2 border-black" role="dialog" aria-modal="true">
      <ul className="space-y-1">
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> Bundles </span>

              <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <ul className="px-4 mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  3 subject Bundle
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  4 subject Bundle
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> Subjects </span>

              <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="px-4 mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Physics
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Chemistry
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Biology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Maths
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Fur maths
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Economy
                </a>
              </li>




              
            </ul>
          </details>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            About Us
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Cart
          </a>
        </li>

        
      </ul>
    </div>
    )}</>
);
}

export default MobileMenu;
