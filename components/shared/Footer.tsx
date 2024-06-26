import React from "react";

function Footer() {
  return (
    <footer className="bg-footer">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full p-2 text-white font-semibold shadow transition  sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-Fhover"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start"></div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-lg text-white lg:text-left font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-white  transition hover:text-Fhover"
                href="#"
              >
                {" "}
                Bundles{" "}
              </a>
            </li>

            <li>
              <a
                className="text-white  transition hover:text-Fhover"
                href="#"
              >
                {" "}
                Subjects
              </a>
            </li>

            <li>
              <a
                className="text-white  transition hover:text-Fhover"
                href="#"
              >
                {" "}
                About us{" "}
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-Fhover"
                href="#"
              >
                {" "}
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-Fhover lg:text-right">
          Created by Hon Sam
        </p>
      </div>
    </footer>
  );
}

export default Footer;
