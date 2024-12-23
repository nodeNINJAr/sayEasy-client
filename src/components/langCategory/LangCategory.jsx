import React from "react";
import CategoryCard from "./CategoryCard";

const LangCategory = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center ">
      <CategoryCard />
    </div>
  );
};

export default LangCategory;
