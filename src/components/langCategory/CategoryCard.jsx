import React from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CategoryCard = () => {
  //
  const navigate = useNavigate();
  //
  const handleCategory = (cate) => {
    navigate(`/tutors/${cate}`);
  };
  //
  const categories = [
    {
      language: "english",
      teachers: 5003,
      flag: "https://flagcdn.com/w320/gb.png",
    },
    {
      language: "japanese",
      teachers: 988,
      flag: "https://flagcdn.com/w320/jp.png",
    },
    {
      language: "spanish",
      teachers: 2595,
      flag: "https://flagcdn.com/w320/es.png",
    },
    {
      language: "chinese",
      teachers: 988,
      flag: "https://flagcdn.com/w320/cn.png",
    },
    {
      language: "french",
      teachers: 1064,
      flag: "https://flagcdn.com/w320/fr.png",
    },
    {
      language: "italian",
      teachers: 783,
      flag: "https://flagcdn.com/w320/it.png",
    },
    {
      language: "german",
      teachers: 1200,
      flag: "https://flagcdn.com/w320/de.png",
    },
    {
      language: "korean",
      teachers: 654,
      flag: "https://flagcdn.com/w320/kr.png",
    },
    {
      language: "arabic",
      teachers: 950,
      flag: "https://flagcdn.com/w320/sa.png",
    },
    {
      language: "portuguese",
      teachers: 700,
      flag: "https://flagcdn.com/w320/pt.png",
    },
  ];

  return (
    <>
      {categories?.map((category , idx) => (
        <div key={idx}
          onClick={() => handleCategory(category?.language)}
          className="w-full backdrop-blur-lg px-4 py-2 flex justify-between items-center gap-4 overflow-hidden rounded-lg  cursor-pointer  dark:bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-500 transition-all ease-in-out duration-300 border dark:border-slate-600 border-slate-200"
        >
          <div className="flex items-center justify-start gap-2  sm:w-[100px]">
            <img
              className="h-14 w-full rounded-lg mx-auto object-cover"
              src={category?.flag}
              alt="flag"
            />
          </div>
          <div className="p-1">
            <p className="text-lg font-semibold dark:text-white text-[#656565] font-figtree capitalize">
              {category?.language}
            </p>
            <p className="text-[#a9a9a9] text-sm capitalize font-fira truncate">
              {category?.teachers} teachers
            </p>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      ))}
    </>
  );
};

CategoryCard.propTypes = {};

export default CategoryCard;
