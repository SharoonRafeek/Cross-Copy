import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex flex-row text-white justify-between items-center">
          <span className="lg:ml-32 md:ml-16 text-xl px-3 pt-1 font-bold lg:text-3xl md:text-2xl bg-cyan-600">
            CrossCopy.
          </span>
          <div className="flex pl-3 justify-between w-full lg:w-1/4">
            <span>
              <a
                className="header-link"
                href="..."
              >
                Feedback
              </a>
            </span>
            <span>
              <a
                className="header-link"
                href="..."
              >
                Patron
              </a>
            </span>


            <span className="lg:mr-32 md:mr-16 space-x-2 lg:space-x-9 md:space-x-5">
              <a
                className="header-link"
                href="https://github.com/SharoonRafeek/Cross-Copy"
              >
                <AiFillGithub size={"1.5em"} />
              </a>
            </span>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
