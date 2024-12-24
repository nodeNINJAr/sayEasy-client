import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../components/hooks/axiosInstance/axiosSecure";
import TutorCard from "../components/Card/TutorCard";
import ProductSearch from "../components/search/ProductSearch";

const Tutors = () => {
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  // state for store tutor data
  const [tutorsData, setTutorsData] = useState([]);
  //handle search
  const [searchVal, setSearchVal] = useState("");
  // fetch all data
  const fetchALLTutor = async () => {
    const { data } = await axiosSecure.get(`/tutorials?search=${searchVal}`);
    setTutorsData(data);
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
  }, [searchVal]);

  //
  return (
    <div>
      <ProductSearch tutorsData={tutorsData} handleSearch={setSearchVal} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 sm:gap-8 w-11/12 mx-auto ">
        <div className="col-span-2">
          {tutorsData?.map((tutor) => (
            <TutorCard key={tutor._id} tutorData={tutor} />
          ))}
        </div>

        <div className="col-span-1 space-y-4">
          <h1 className="font-figtree text-[#6a6a6a] dark:text-[#a8a8a8] font-semibold text-xl bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg">Tutor Preview Randomly: </h1>
            <img className="w-full rounded-xl " src="https://via.placeholder.com/150" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tutors;
