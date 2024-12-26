import React, { useEffect, useState } from "react";
import TutorBooked from "../../components/Card/TutorBooked";
import UseAuth from "../../components/hooks/UseAuth";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import toast from "react-hot-toast";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import noContent from "../../assets/lottie json file/noitemhere.json";
import Loader2 from "../../components/Loader/Loader2";
const BookedTutors = () => {
  // 
  const [Loader , setLoader] = useState(true)
  // auth
  const { user } = UseAuth();
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  // state for store tutor data
  const [bookedTutors, setBookedTutors] = useState([]);
  // fetch all data
  const fetchTutorData = async () => {
    const { data } = await axiosSecure.get(`/booked-tutors/${user?.email}`);
    setBookedTutors(data);
    setLoader(false)
  };
  // for initial run
  useEffect(() => {
    fetchTutorData();
  }, []);

  return (
    <section className="">
      <Helmet>
        <title>Booked Tutors || sayEasy</title>
      </Helmet>
      {/* hero */}
      <Hero path={location.pathname} />
      {/*  */}
      {!Loader ?
        <>
          {bookedTutors.length > 0 ? (
            <div className="flex flex-wrap justify-start items-center gap-4 p-4 my-6 md:p-8 w-11/12 mx-auto ">
              {bookedTutors?.map((tutor) => (
                <TutorBooked key={tutor?._id} bookedTutor={tutor} />
              ))}
            </div>
          ) : (
            <div className="w-3/4 sm:w-2/4 lg:w-1/4 mx-auto py-10 md:py-20">
              <Lottie animationData={noContent}></Lottie>
              <p className="text-center text-xl dark:text-gray-400 text-gray-600 capitalize mt-6 font-figtree">
                No Booked Tutors Here{" "}
                <span className="text-green-500 cursor-pointer hover:border-b">
                  BooK First
                </span>
              </p>
            </div>
          )}
        </> : <Loader2/>
      
      }
    </section>
  );
};

export default BookedTutors;
