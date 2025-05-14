import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 lg:fixed w-full pt-10 pb-5" aria-label="Site Footer">
      <div className="text-neutral-400 flex justify-evenly text-xs">
        <nav className="space-x-5" aria-label="Social Links">
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="https://twitter.com/sharoon_rafeek"
            aria-label="Twitter Profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="https://www.linkedin.com/in/sharoonrafeek/"
            aria-label="LinkedIn Profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="mailto:sharoonrafeek@gmail.com"
            aria-label="Email Contact"
          >
            E-mail
          </a>
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="https://github.com/Sharoonrafeek"
            aria-label="GitHub Profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
