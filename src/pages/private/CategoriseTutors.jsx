import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import { useLocation, useParams } from "react-router-dom";
import TutorCard from "../../components/Card/TutorCard";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";

const CategoriseTutors = () => {
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  // 
  const {pathname} = useLocation();
  //category params
  const { category } = useParams();
  // state for store tutor data
  const [cateData, setCateData] = useState([]);
  // fetch all data
  const fetchALLTutor = async () => {
    const { data } = await axiosSecure.get(`/tutors/${category}`);
    setCateData(data);
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
  }, [category]);

  return (
    <>
     <Helmet>
        <title>Categories Tutors || sayEasy</title>
      </Helmet>
      {/* hero */}
      <Hero path={pathname.split( "/").join(' ')}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto py-10 md:py-20">
        {cateData?.map((cate) => (
          <TutorCard key={cate._id} categoriosData={cate} />
        ))}
      </div>
    </>
  );
};

export default CategoriseTutors;
