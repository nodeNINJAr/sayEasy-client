import React, { useEffect, useState } from "react";
import UseInfo from "./hooks/UseInfo";
import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";

//
const Stats = () => {
  const { tutorCount, tutors, usersCount } = UseInfo();
  const [reviewCount, setReviewCount] = useState();
  //
  useEffect(() => {
    const totalReview = tutors.reduce((acc, current) => {
      return acc + current.review;
    }, 0);
    setReviewCount(totalReview);
  }, [tutors]);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 w-11/12 mx-auto">
      <Slide direction="left">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-100 dark:text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 bg-violet-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-9 w-9 dark:text-gray-800 text-gray-100" // Darker color for the icon
            >
              {/* Head of the human (circle) */}
              <circle
                cx="32"
                cy="16"
                r="8"
                className="stroke-gray-800 fill-none"
                strokeWidth="2"
              />

              {/* Graduation Cap (polygon representing cap) */}
              <polygon
                points="22,14 42,14 32,6"
                className="stroke-gray-800 fill-gray-700"
                strokeWidth="2"
              />

              {/* Body (line for the torso) */}
              <path
                d="M32,24 L32,40"
                className="stroke-gray-800 fill-none"
                strokeWidth="2"
              />

              {/* Arms (lines extending from the body) */}
              <path
                d="M16,30 H48"
                className="stroke-gray-800 fill-none"
                strokeWidth="2"
              />

              {/* Legs (lines for the legs) */}
              <path
                d="M24,40 L32,56 L40,40"
                className="stroke-gray-800 fill-none"
                strokeWidth="2"
              />

              {/* Experience symbol: Star (placed near the head) */}
              <polygon
                points="32,8 34,14 40,14 36,18 38,24 32,20 26,24 28,18 24,14 30,14"
                className="stroke-gray-800 fill-yellow-500"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <span className="text-3xl font-semibold leading-none">
              <CountUp start={0} end={tutorCount} duration={5}></CountUp>+
            </span>
            <p className="capitalize">Experienced Tutors</p>
          </div>
        </div>
      </Slide>
      <Slide direction="up">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-100 dark:text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 bg-violet-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-9 w-9 dark:text-gray-800 text-gray-100"
            >
              <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
              <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
              <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
              <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
          <span className="text-3xl font-semibold leading-none">
              <CountUp start={0} end={reviewCount} duration={5} easing="easeOut"></CountUp>+
            </span>
            <p className="capitalize">5-star tutor reviews</p>
          </div>
        </div>
      </Slide>
      <Slide direction="down">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-100 dark:text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 bg-violet-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 dark:text-gray-800 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0v18m0-18c1.66 0 3.31.5 4.71 1.35m-9.42 0A8.96 8.96 0 0 1 12 3m4.71 1.35l-9.42 13.3M16 12h-8m5.5-5.5L8 15.5"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <span className="text-3xl font-semibold leading-none">
               <CountUp start={0} end={10} duration={5} easing="easeOut"></CountUp>+
            </span>
            <p className="capitalize">Languages</p>
          </div>
        </div>
      </Slide>
      <Slide direction="right">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-100 dark:text-gray-800">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400 bg-violet-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 dark:text-gray-800 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5M2 20h5M12 20h5M12 14a4 4 0 100-8 4 4 0 000 8zM6.5 17a8.38 8.38 0 0111 0"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
          <span className="text-3xl font-semibold leading-none">
               <CountUp start={0} end={usersCount} duration={5} easing="easeOut"></CountUp>+
            </span>
            <p className="capitalize">Total Users</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Stats;
