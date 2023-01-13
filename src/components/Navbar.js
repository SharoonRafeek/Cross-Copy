import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex flex-row text-white   justify-between">
          <span className="lg:ml-32 md:ml-16 text-xl px-3 pt-1 font-bold lg:text-3xl md:text-2xl bg-cyan-600">
            CrossCopy.
          </span>
          <div className="lg:pr-32 md:pr-16 space-x-2 lg:space-x-9 md:space-x-5">
            <span>
              <a className="header-link" href="/about">
                About
              </a>
            </span>
            <span>
              <a className="header-link" href="/contact">
                Contact
              </a>
            </span>
            <span>
              <a
                className="header-link"
                href="https://github.com/SharoonRafeek/Cross-Copy"
              >
                Contribute
              </a>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
