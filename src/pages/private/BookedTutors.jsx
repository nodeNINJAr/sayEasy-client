import React from "react";
import TutorBooked from "../../components/Card/TutorBooked";
import UseAuth from "../../components/hooks/UseAuth";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import noContent from "../../assets/lottie json file/noitemhere.json";
import Loader2 from "../../components/Loader/Loader2";
import { useQuery } from "@tanstack/react-query";

// 
const BookedTutors = () => {
  // auth
  const { user } = UseAuth();
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();

  // use tanstack query for fetch
  const {
    data: bookedTutors =[],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booked-tutors"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/booked-tutors/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader2/>
  }

  //
  return (
    <section>
      <Helmet>
        <title>Booked Tutors || sayEasy</title>
      </Helmet>
      {/* hero */}
      <Hero path={location.pathname} />

      <>
        {bookedTutors.length > 0 ? (
          <div className="flex flex-wrap justify-start items-center gap-4 p-4 my-6 md:p-8 w-11/12 mx-auto ">
            {bookedTutors?.map((tutor) => (
              <TutorBooked
                key={tutor?._id}
                bookedTutor={tutor}
                refetch={refetch}
              />
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
      </>
    </section>
  );
};

export default BookedTutors;
