import React, { useEffect, useState } from "react";
import useRatings from "../components/hooks/useRatings";
import RatingCard from "../components/Card/RatingCard";
import Loader2 from "../components/Loader/Loader2";
import Hero from "../components/hero/Hero";

const Ratings = () => {
  const allRatings = useRatings();

  //    
  if(allRatings == []) return <Loader2/>
  //
  return (
    <div className="w-11/12 mx-auto py-10 md:pt-16">
        <h1 className="text-5xl font-fira font-semibold dark:text-white text-black capitalize text-center pb-10">All ratings by our learners</h1>
      {/* all ratings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center">
        {/* rating card */}
        {allRatings.map((rating, index) => (
          <RatingCard key={index} {...rating} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
