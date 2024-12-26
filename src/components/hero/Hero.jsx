import React from "react";
import { Slide } from "react-awesome-reveal";

const Hero = ({ path }) => {
  return (
    <div className="bg-banner2 sm:bg-banner">
      <div className="bg-[#131313aa] py-12 sm:py-28 sm:px-10 ">
        <Slide direction="down">
          <h1 className="text-center capitalize font-bold font-mono text-3xl sm:text-4xl w-full sm:w-11/12 xl:w-7/12 mx-auto text-gray-300 leading-snug mb-4">
            Your Path to Language Mastery, One Word at a Time!
          </h1>
        </Slide>
        <Slide direction="up">
          <nav aria-label="breadcrumb" className="w-full mx-auto p-4 ">
            <ol className="flex justify-center items-center h-8 space-x-2  text-gray-300 text-xl font-fira">
              <li className="flex items-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Back to homepage"
                  className="hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 pr-1"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  {}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  fill="currentColor"
                  className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
                >
                  <path d="M32 30.031h-32l16-28.061z"></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-1 capitalize hover:underline"
                >
                  {path}
                </a>
              </li>
            </ol>
          </nav>
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
