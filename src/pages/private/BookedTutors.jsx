import React, { useEffect, useState } from "react";
import TutorBooked from "../../components/Card/TutorBooked";
import UseAuth from "../../components/hooks/UseAuth";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import toast from "react-hot-toast";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";

const BookedTutors = () => {
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
      <div className="flex flex-wrap justify-start items-center gap-4 p-4 my-6 md:p-8 w-11/12 mx-auto ">
        {bookedTutors?.map((tutor) => (
          <TutorBooked key={tutor?._id} bookedTutor={tutor} />
        ))}
      </div>
    </section>
  );
};

export default BookedTutors;
