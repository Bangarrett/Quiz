import React, { useState } from "react";


export const Navbar = () => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header
        className={`bg-gray-900 py-5 flex flex-col  justify-center transition-all duration-500 mb-10 ${
          expanded ? "h-screen fixed top-0 left-0 right-0" : "h-16"
        }`}
      >
        <div
          className={`${
            expanded ? "flex flex-col transform translate-x-0 items-center" : "-translate-x-30"
          } transition-all duration-500`}
        >
          {expanded && (
            <h1 className={`text-white text-4xl font-bold ${expanded ? "" : "ml-4"}`}>
              Quiz App
            </h1>
          )}
          {expanded && (
            <button
              className="ml-0 mt-4 bg-yellow-400 text-black px-8 py-2 rounded"
              onClick={handleToggle}
            >
              ¡Comenzar!
            </button>
          )}
        </div>
        {!expanded && (
          <span className="flex justify-center items-center h-screen bg-gray-900">
            <h2 className="text-white text-4xl font-bold">
            <a href="/">
              Quiz App
            </a>  
            </h2>
          </span>
        )}
      </header>
    </>
  );
};

