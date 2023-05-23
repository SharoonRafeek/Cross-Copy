import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5">
      <div className="text-neutral-400 flex justify-evenly text-xs">
        <div className="space-x-5">
          <a
            className="hover:text-cyan-600"
            href="https://twitter.com/sharoon_rafeek"
          >
            Twitter
          </a>
          <a
            className="hover:text-cyan-600"
            href="https://www.linkedin.com/in/sharoonrafeek/"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-cyan-600"
            href="mailto:sharoonrafeek@gmail.com"
          >
            E-mail
          </a>
          <a
            className="hover:text-cyan-600"
            href="https://github.com/Sharoonrafeek"
          >
            GitHub{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
