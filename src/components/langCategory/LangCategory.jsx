import React from "react";
import CategoryCard from "./CategoryCard";
import curve from "../../assets/image/curve.png";
import { Slide } from "react-awesome-reveal";
import {motion} from "framer-motion";

const LangCategory = () => {
  return (
    <>
      <Slide direction="down">
        <div className="flex flex-col justify-center items-center gap-5 pb-16 ">
          <h1 className="text-center text-4xl sm:text-5xl capitalize font-figtree font-semibold">
            language category
          </h1>
          <motion.img  initial={{opacity:0.25}} animate={{opacity:1}} transition={{ type: 'spring', duration:4, repeat: Infinity, repeatType: "loop", ease: "easeInOut",   }} className="h-10 -mt-3" src={curve} alt="" />
          <p className="text-lg font-figtree dark:text-gray-400 text-gray-500 text-center">
            Explore diverse languages with SayEasy, offering courses for all
            levels to help
            <br className="hidden sm:block" /> you achieve fluency.
          </p>
        </div>
      </Slide>
       {/* category card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center ">
        <CategoryCard />
      </div>
    </>
  );
};

export default LangCategory;
