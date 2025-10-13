import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-16 pt-8 pb-6 border-t border-gray-700" aria-label="Site Footer">
      <div className="text-neutral-400 flex flex-col items-center gap-4">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base" aria-label="Footer Links">
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="https://github.com/SharoonRafeek/Cross-Copy"
            aria-label="GitHub Repository"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="https://forms.gle/1oNLNijHKj4dz6XdA"
            aria-label="Provide Feedback"
            rel="noopener noreferrer"
            target="_blank"
          >
            Feedback
          </a>
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="/info/privacy"
            aria-label="Privacy Policy"
          >
            Privacy
          </a>
          <a
            className="hover:text-cyan-600 transition-colors duration-200"
            href="/info/terms"
            aria-label="Terms of Service"
          >
            Terms
          </a>
        </nav>
        <p className="text-xs text-center text-neutral-500">
          Created with ❤️ by{" "}
          <a
            href="https://sharoonrafeek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 transition-colors duration-200"
          >
            Sharoon
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
