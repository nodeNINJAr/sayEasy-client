import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../components/hooks/axiosInstance/axiosSecure";
import TutorCard from "../components/Card/TutorCard";
import ProductSearch from "../components/search/ProductSearch";
import Pagination from "../components/pagination/Pagination";

const Tutors = () => {
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  // state for store tutor data
  const [tutorsData, setTutorsData] = useState([]);
  //handle search
  const [searchVal, setSearchVal] = useState("");
  // pagination
  const [count, setCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(2);
  const numberOfpages = Math.ceil(count / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [...Array(numberOfpages).keys()];

  // fetch all data
  const fetchALLTutor = async () => {
    const { data } = await axiosSecure.get(
      `/tutorials?page=${currentPage}&size=${itemPerPage}&search=${searchVal}`
    );

    console.log(data.tutoirals);
    setTutorsData(data.tutoirals);
    setCount(data.count);
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
  }, [searchVal, currentPage]);

  //
  return (
    <div>
      <ProductSearch totalTutors={count} handleSearch={setSearchVal} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 sm:gap-8 w-11/12 mx-auto ">
        <div className="col-span-2">
          {tutorsData?.map((tutor) => (
            <TutorCard key={tutor._id} tutorData={tutor} />
          ))}
          {/* pagination */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
            numberOfpages={numberOfpages}
          />
        </div>

        <div className="col-span-1 space-y-4">
          <h1 className="font-figtree text-[#6a6a6a] dark:text-[#a8a8a8] font-semibold text-xl bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg">
            Tutor Preview Randomly:{" "}
          </h1>
          <img
            className="w-full rounded-xl "
            src="https://via.placeholder.com/150"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Tutors;
