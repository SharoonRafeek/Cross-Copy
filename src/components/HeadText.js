import React from "react";

export const HeadText = () => {
  return (
    <section className="w-full flex flex-col items-center px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed lg:w-4/5 md:w-11/12 text-center font-bold">
        CrossCopy - Instant Text Sharing Across Devices
      </h1>
      <p className="text-center text-sm md:text-base mt-4 lg:w-3/4 md:w-5/6 text-gray-300 font-medium leading-relaxed">
        A simple, fast, and secure clipboard sharing solution that works across all your platforms.
        No installation required - just paste, share, and go.
      </p>
    </section>
  );
};
