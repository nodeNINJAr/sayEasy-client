import React from "react";
import CategorySlider from "./CategorySlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LangCategory = () => {
  return (
    <div className="w-11/12 mx-auto relative border border-[#4a4a4a62] dark:border-[#e8e8e8] rounded-lg py-4 px-14 ">
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
