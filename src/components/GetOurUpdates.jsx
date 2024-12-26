import React from "react";
import { Slide } from "react-awesome-reveal";

const GetOurUpdates = () => {
  return (
    <div className="w-full bg-gray-500 dark:bg-gray-800">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <Slide direction="down">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100 text-gray-800">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100 text-gray-700">
            Find out about events and other news
          </p>
        </Slide>
        <Slide direction="up">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default GetOurUpdates;
