import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../components/hooks/axiosInstance/axiosSecure";
import TutorCard from "../components/Card/TutorCard";
import ProductSearch from "../components/search/ProductSearch";
import Pagination from "../components/pagination/Pagination";
import Hero from "../components/hero/Hero";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/aboutUs/VideoCard";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import Loader2 from "../components/Loader/Loader2";
import { useQuery } from "@tanstack/react-query";

const Tutors = () => {
  //
  const [loader, setLoader] = useState(true);
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  //
  const location = useLocation();
  // state for store tutor data
  const [tutorsData, setTutorsData] = useState([]);
  //handle search
  const [searchVal, setSearchVal] = useState("");
  // pagination
  const [count, setCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(4);
  const numberOfpages = Math.ceil(count / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [...Array(numberOfpages).keys()];


// sort
const handleSort =(sortedItem)=>{
       fetchALLTutor(sortedItem)
}

  // fetch all data
  const fetchALLTutor = async (sortedItem) => {
    const { data } = await axiosSecure.get(
      `/tutorials?page=${currentPage}&size=${itemPerPage}&search=${searchVal}&sortBy=${sortedItem}`
    );
    setTutorsData(data.tutoirals);
    setCount(data.count);
    setLoader(false);
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
  }, [searchVal, currentPage]);

  // const { data: tutorsData = [] , isLoading } = useQuery({
  //   queryKey: ["tutorials", searchVal, currentPage],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure(
  //       `/tutorials?page=${currentPage}&size=${itemPerPage}&search=${searchVal}`
  //     );
  //     setCount(data.count);
  //     return data.tutoirals;
  //   },
  // });

  // console.log(tutorsData);
 
if(loader){
   return <Loader2/>
}

  //
  return (
    <>
      <Helmet>
        <title>Tutors || sayEasy</title>
      </Helmet>
      {/* hero */}
      <Hero path={location.pathname.split("/")} />
      {/* search bar */}
      <div className="py-10 md:py-16">
        <ProductSearch handleSort={handleSort} totalTutors={count} handleSearch={setSearchVal} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 sm:gap-8 w-11/12 mx-auto ">
          <div className="col-span-2">
            {tutorsData.length > 0 ? (
              <>
                {tutorsData?.map((tutor) => (
                  <TutorCard key={tutor._id} tutorData={tutor} />
                ))}

                {/* pagination */}
                <div className="mt-10">
                  <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pages={pages}
                    numberOfpages={numberOfpages}
                  />
                </div>
              </>
            ) : (
              <p className="flex justify-center items-center py-10 sm:py-24 capitalize text-2xl font-figtree ">
                No Tutors Found
              </p>
            )}
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="font-figtree text-[#6a6a6a] dark:text-[#a8a8a8] font-semibold text-xl bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg">
              Tutor Preview Randomly:{" "}
            </h1>
            <Fade duration={1000}>
              <VideoCard />
              <img
                className="w-full rounded-xl "
                src="https://via.placeholder.com/150"
                alt=""
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutors;
