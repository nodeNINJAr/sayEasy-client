import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import { useLocation, useParams } from "react-router-dom";
import TutorCard from "../../components/Card/TutorCard";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";
import Loader2 from "../../components/Loader/Loader2";

const CategoriseTutors = () => {
  //
  const [loader, setLoader] = useState(true);
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  //
  const { pathname } = useLocation();
  //category params
  const { category } = useParams();
  // state for store tutor data
  const [cateData, setCateData] = useState([]);
  // fetch all data
  const fetchALLTutor = async () => {
    const { data } = await axiosSecure.get(`/tutors/${category}`);
    setCateData(data);
    setLoader(false);
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
      <Hero path={pathname.split("/").join(" ")} />
   
        {!loader ?
             <>
             {cateData.length > 0 ?
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto py-10 md:py-20">
                {cateData?.map((cate) => (
                  <TutorCard key={cate._id} categoriosData={cate} />
                ))}
                </div> :
               <p className="flex justify-center items-center py-10 sm:py-36 capitalize text-2xl font-figtree ">No Tutors Found</p>
            }
             </> :<Loader2/>
             
        }
      
    </>
  );
};

export default CategoriseTutors;
