import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-neutral-400 flex justify-between text-xs">
        <div className="space-x-5">
          <a
            className="hover:text-cyan-600"
            href="https://twitter.com/sharoon_rafeek"
          >
            Twitter
          </a>
          <a
            className="hover:text-cyan-600"
            href="https://in.linkedin.com/in/sharoon-rafeek-6361a6197"
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
