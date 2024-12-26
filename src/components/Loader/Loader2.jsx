import React from "react";

const Loader2 = () => {
  return (
    <div className="loader-container text-3xl flex justify-center items-center py-40 font-fira font-semibold">
      <p className="loader-text dark:text-gray-400">
        Wait<span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </p>
    </div>
  );
};

export default Loader2;
