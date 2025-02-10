import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Slide = ({ title, subTitle, img, btnText, link }) => {
  return (
    <div className="sm:w-11/12 mx-auto md:flex justify-between items-center gap-14 px-4 md:px-0  mb-10 md:mb-0">
      {/* image */}
      <figure className="w-full md:w-6/12 xl:w-7/12 mx-auto">
        <img className="w-fit 2xl:w-11/12 object-cover mx-auto p-4" src={img} alt="" />
      </figure>
      {/* content*/}
      <div className="flex flex-col justify-start md:items-end gap-4 w-full md:w-6/12 xl:w-5/12 text-left md:text-end ">
        <h1 className="2xl:mb-8 text-4xl sm:text-5xl md:text-4xl xl:text-6xl 2xl:text-8xl font-fira capitalize font-bold xl:leading-[80px] 2xl:leading-[100px] text-[#9A59C9]">
          {title}
        </h1>
        <p className="text-xs md:text-base 2xl:text-lg font-medium font-montserrat dark:text-gray-400 text-gray-700">
          {subTitle}
        </p>
        <Link to={link}>
          <motion.button
            initial={{opacity:0.25}}
            animate={{opacity:1}}
            transition={{duration:3,
              repeat:Infinity,
              repeatType:"loop",
              ease:"easeInOut",

            }}
            type="button"
            className="mt-2 md:mt-4 hover:bg-[#9A59C9] font-fira text-lg px-8 py-3 font-semibold border rounded dark:border-gray-100 border-gray-800 dark:text-gray-100 text-gray-800"
          >
            {btnText || "Get started"}
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

Slide.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  img: PropTypes.string,
};

export default Slide;
