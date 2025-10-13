import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="mb-8">
      <nav className="flex flex-row text-white justify-between items-center px-4 md:px-8 lg:px-16 py-4" aria-label="Main Navigation">
        <div className="text-xl font-bold lg:text-3xl md:text-2xl">
          <a href="/" className="no-underline text-white bg-cyan-600 px-3 py-1 inline-block hover:bg-cyan-500 transition-colors duration-200" aria-label="CrossCopy Homepage">
            CrossCopy.
          </a>
        </div>
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <a
            className="header-link"
            href="https://forms.gle/1oNLNijHKj4dz6XdA"
            aria-label="Provide Feedback"
            rel="noopener"
            target="_blank"
          >
            Feedback
          </a>
          <a
            href="https://www.buymeacoffee.com/SharoonRafeek"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-105 hidden sm:block"
            aria-label="Buy me a coffee"
          >
            <img
              className="h-8 w-auto"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy me a coffee"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
