import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row text-white justify-between items-center" aria-label="Main Navigation">
        <div className="lg:ml-32 md:ml-16 text-xl px-3 pt-1 font-bold lg:text-3xl md:text-2xl bg-cyan-600">
          <a href="/" className="no-underline text-white" aria-label="CrossCopy Homepage">
            CrossCopy.
          </a>
        </div>
        <div className="flex pl-3 justify-between w-full lg:w-1/4">
          <div>
            <a
              className="header-link"
              href="https://forms.gle/1oNLNijHKj4dz6XdA"
              aria-label="Provide Feedback"
              rel="noopener"
            >
              Feedback
            </a>
          </div>
          <div className="lg:mr-32 md:mr-16 space-x-2 lg:space-x-9 md:space-x-5">
            <a
              className="header-link"
              href="https://github.com/SharoonRafeek/Cross-Copy"
              aria-label="CrossCopy GitHub Repository"
              rel="noopener"
            >
              <AiFillGithub size={"1.5em"} aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
