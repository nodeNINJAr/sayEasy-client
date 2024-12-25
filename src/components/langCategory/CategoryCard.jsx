import React from "react";

import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import UseInfo from "../hooks/UseInfo";


const CategoryCard = () => {
    const {tutors} = UseInfo()
  const categories = [
    {
      language: "english",
      teachers: tutors?.filter(item=> item.language === 'english').length,
      flag: "https://flagcdn.com/w320/gb.png",
    },
    {
      language: "japanese",
      teachers: tutors?.filter(item=> item.language === "japanese").length,
      flag: "https://flagcdn.com/w320/jp.png",
    },
    {
      language: "spanish",
      teachers: tutors?.filter(item=> item.language === "spanish").length,
      flag: "https://flagcdn.com/w320/es.png",
    },
    {
      language: "chinese",
      teachers: tutors?.filter(item=> item.language === "chinese").length,
      flag: "https://flagcdn.com/w320/cn.png",
    },
    {
      language: "french",
      teachers: tutors?.filter(item=> item.language === "french").length,
      flag: "https://flagcdn.com/w320/fr.png",
    },
    {
      language: "italian",
      teachers: tutors?.filter(item=> item.language === "italian").length,
      flag: "https://flagcdn.com/w320/it.png",
    },
    {
      language: "german",
      teachers: tutors?.filter(item=> item.language === "german").length,
      flag: "https://flagcdn.com/w320/de.png",
    },
    {
      language: "korean",
      teachers: tutors?.filter(item=> item.language === "korean").length,
      flag: "https://flagcdn.com/w320/kr.png",
    },
    {
      language: "arabic",
      teachers: tutors?.filter(item=> item.language === "arabic").length,
      flag: "https://flagcdn.com/w320/sa.png",
    },
    {
      language: "portuguese",
      teachers: tutors?.filter(item=> item.language === "portuguese").length,
      flag: "https://flagcdn.com/w320/pt.png",
    },
  ];

  //
  const navigate = useNavigate();
  //
  const handleCategory = (cate) => {
    navigate(`/tutors/${cate}`);
  };
 

  return (
    <>
      {categories?.map((category , idx) => (
        <div key={idx}
          onClick={() => handleCategory(category?.language)}
          className="w-full px-4 py-2 flex justify-between items-center gap-4 overflow-hidden rounded-lg  cursor-pointer bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-500 transition-all ease-in-out duration-300 border dark:border-gray-700 border-slate-200"
        >
          <div className="flex items-center justify-start gap-2  sm:w-[100px]">
            <img
              className="h-14 w-full rounded-lg mx-auto object-cover"
              src={category?.flag}
              alt="flag"
            />
          </div>
          <div className="p-1">
            <p className="text-lg font-semibold dark:text-gray-400 text-[#656565] font-figtree capitalize">
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


export default CategoryCard;
