import React, { useEffect, useState } from "react";
import TutorBooked from "../../components/Card/TutorBooked";
import UseAuth from "../../components/hooks/UseAuth";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";

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
    <div>
      <h1> booked-tutors</h1>
      {bookedTutors?.map((tutor) => (
        <TutorBooked key={tutor?._id} tutor={tutor} />
      ))}
    </div>
  );
};

export default BookedTutors;
