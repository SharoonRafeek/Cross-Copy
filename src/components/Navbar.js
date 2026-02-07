import React from "react";

const Navbar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="mb-8">
      <nav className="flex flex-row text-white justify-between items-center px-4 md:px-8 lg:px-16 py-4" aria-label="Main Navigation">
        <div className="text-xl font-bold lg:text-3xl md:text-2xl">
          <a href="/" className="no-underline text-white bg-cyan-600 px-3 py-1 inline-block hover:bg-cyan-500 transition-colors duration-200" aria-label="CrossCopy Homepage">
            CrossCopy.
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 text-xs md:text-sm">
          <button
            className="hover:text-cyan-500 transition-colors duration-200 hidden md:inline cursor-pointer bg-transparent border-0 text-white"
            onClick={(e) => scrollToSection(e, 'how-it-works')}
            aria-label="How it works"
          >
            How It Works
          </button>
          <button
            className="hover:text-cyan-500 transition-colors duration-200 hidden md:inline cursor-pointer bg-transparent border-0 text-white"
            onClick={(e) => scrollToSection(e, 'features')}
            aria-label="Features"
          >
            Features
          </button>
          <button
            className="hover:text-cyan-500 transition-colors duration-200 hidden md:inline cursor-pointer bg-transparent border-0 text-white"
            onClick={(e) => scrollToSection(e, 'faq')}
            aria-label="FAQ"
          >
            FAQ
          </button>
          <a
            className="hover:text-cyan-500 transition-colors duration-200"
            href="/docs"
            aria-label="CrossCopy Documentation"
          >
            Docs
          </a>
          <a
            className="hover:text-cyan-500 transition-colors duration-200"
            href="https://forms.gle/1oNLNijHKj4dz6XdA"
            aria-label="Provide Feedback"
            rel="noopener noreferrer"
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
