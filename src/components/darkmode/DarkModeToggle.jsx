import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  //
  const [isDarkMode, setIsDarkMode] = useState(false);

  //
  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // dark light mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <label
      htmlFor="Toggle1"
      className="bg-[#202020] dark:bg-slate-200 shadow-md  p-4 rounded-xl fixed z-50 right-4 bottom-4 inline-flex items-center space-x-4 cursor-pointer  text-gray-800 dark:text-gray-100"
    >
      <span className="relative">
        <input
          id="Toggle1"
          type="checkbox"
          className="hidden peer"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 dark:bg-gray-60 peer-checked:bg-violet-400 peer-checked:dark:bg-violet-600"></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800 dark:bg-gray-100"></div>
      </span>
      {isDarkMode ? (
        <span className={isDarkMode && "text-black font-fira font-semibold"}>
          Dark
        </span>
      ) : (
        <span className={!isDarkMode && "text-white font-fira font-semibold"}>
          Light
        </span>
      )}
    </label>
  );
};

export default DarkModeToggle;
