import React from "react";
import { FaCheck, FaAward } from "react-icons/fa";
import aboutImg from "../../assets/image/about-01.jpg";
import VideoCard from "./VideoCard";
import { Slide } from "react-awesome-reveal";
import {motion} from "framer-motion"
const AboutUs = () => {
  return (
    <div className=" flex flex-wrap md:flex-nowrap gap-6 items-center justify-between dark:bg-gray-900 px-4 py-10  lg:py-32">
      {/* Left Section: Image */}

      <div className="w-full md:w-1/2 flex justify-center group">
        <Slide direction="down">
          <div className="relative">
            <div className="md:absolute right-36 top-72 lg:-right-20 lg:-top-20 w-full md:w-56 mb-4">
              <VideoCard />
            </div>
            <img
              src={aboutImg}
              alt="Person learning"
              className="rounded-lg shadow-lg w-full "
            />
            <motion.div initial={{ x: -30}} animate={{x: 0}} transition={{ type: 'spring', duration:3, repeat: Infinity, repeatType: "loop",ease: "easeInOut",   }} className=" absolute bottom-2  md:bottom-32 lg:-bottom-12 left-2 md:-left-3 lg:-left-20 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-center space-x-2">
              <FaAward className="text-teal-500 text-2xl" />
              <div>
                <div className="text-teal-500 text-xl font-bold">29+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  Wonderful Awards
                </div>
              </div>
            </motion.div>
          </div>
        </Slide>
      </div>

      {/* Right Section: Content */}
      <div className="w-full md:w-1/2 text-left mt-8 md:mt-0 font-figtree">
        <Slide direction="up">
          <p className="text-lg capitalize font-figtree font-normal text-gray-500 mb-3 md:mb-1">
            About us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white ">
            Learn & Grow Your Skills From{" "}
            <span className="text-[#9A59C9]">Anywhere</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-left">
            SayEasy is your ultimate language-learning platform, offering 50+
            languages with engaging lessons, expert tutors, and personalized
            tools to achieve fluency effortlessly.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-2">
              <FaCheck className="text-green-500 text-xl" />
              <span className="text-gray-700 dark:text-gray-300">
                Expert Trainers
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-green-500 text-xl" />
              <span className="text-gray-700 dark:text-gray-300">
                Online Remote Learning
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-green-500 text-xl" />
              <span className="text-gray-700 dark:text-gray-300">
                Lifetime Access
              </span>
            </li>
          </ul>
        </Slide>
      </div>
    </div>
  );
};

export default AboutUs;
