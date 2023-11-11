import React, { useState, useEffect } from "react";

const Alert = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  const message = "Copied!";
  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
      <div
        className={`bg-white text-gray-800 rounded-lg shadow-lg border-cyan-600 border-t-4`}
      >
        <div className="p-2 flex items-center justify-between">
          <p className={`font-semibold border-cyan-600 mr-4`}>{message}</p>
          <button
            className={`text-gray-800 border-cyan-600 hover:text-gray-500 focus:outline-none`}
            onClick={handleClose}
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
