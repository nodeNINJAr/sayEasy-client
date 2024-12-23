import React from "react";
import CategorySlider from "./CategorySlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LangCategory = () => {
  return (
    <div className="w-11/12 mx-auto relative border border-[#c6c6c662] dark:border-slate-500 rounded-lg py-4 px-14 ">
      <CategorySlider />
      {/* Custom navigation buttons */}
      <div className="custom-prev">
        <IoIosArrowBack />
      </div>
      <div className="custom-next">
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default LangCategory;
