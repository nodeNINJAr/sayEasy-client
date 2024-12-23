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
  const [searchVal , setSearchVal] = useState("");  
  // fetch all data
  const fetchALLTutor = async () => {
    const {data} =  await axiosSecure.get(`/tutorials?search=${searchVal}`);
    setTutorsData(data);
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
  }, [searchVal]);

  //
  return (
    <div>
        <ProductSearch tutorsData={tutorsData} handleSearch={setSearchVal}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {tutorsData?.map((tutor) => (
          <TutorCard key={tutor._id} tutorData={tutor} />
        ))}
      </div>
    </div>
  );
};

export default Tutors;
