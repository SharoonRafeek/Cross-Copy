import React from "react";

export const HeadText = () => {
  return (
    <section className="mt-12 w-full flex flex-col items-center">
      <h1 className="text-3xl leading-normal lg:w-4/5 text-center">
        CrossCopy - Instant Text Sharing Across Devices
      </h1>
      <p className="text-center text-sm mt-4 lg:w-3/4 text-gray-400 font-medium">
        A simple, fast, and secure clipboard sharing solution that works across all your platforms.
        No installation required - just paste, share, and go.
      </p>
    </section>
  );
};
