import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UseAxiosSecure from "../hooks/axiosInstance/axiosSecure";
import toast from "react-hot-toast";
import UseInfo from "../hooks/UseInfo";
import { Fade } from "react-awesome-reveal";

const TutorBooked = ({ bookedTutor }) => {
  //
  const { tutors, setRefresh, refresh } = UseInfo();
  // custom axios
  const axiosSecure = UseAxiosSecure();
  //
  const [reviewed, setReviewed] = useState(false);

  const handleReview = async () => {
    try {
      const { data } = await axiosSecure.patch("/review", {
        tutorId: bookedTutor.tutorId,
        _id: bookedTutor._id,
      });
      //
      if (data?.modifiedCount === 1) {
        setRefresh(!refresh);
        toast.success("Your review has been added successfully!");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    if (tutors.find((i) => i._id === bookedTutor.tutorId)?.reviewedBy) {
      const alreadyReviwed =
        tutors
          .find((i) => i._id === bookedTutor.tutorId)
          ?.reviewedBy?.includes(bookedTutor._id) ?? false;
      setReviewed(alreadyReviwed);
    }
  }, [tutors, bookedTutor._id]);

  return (
    <Fade duration={1000}>
      <div className="flex justify-between items-start gap-4 p-3  rounded-lg bg-gray-700 dark:bg-gray-200 dark:text-gray-800">
        {/* image */}
        <div className="rounded-lg dark:text-gray-100">
          {/* Tutor Image */}
          <img
            src={bookedTutor?.tutorImage}
            alt={bookedTutor?.tutorName}
            className="w-[100px] h-24 border-2 rounded-lg  object-cover"
          />
        </div>
        {/* Content */}
        <div className="capitalize flex flex-col gap-1">
          {/* Tutor Name */}
          <h2 className="text-sm font-bold dark:text-gray-800 text-gray-100 capitalize sm:truncate">
            bookedTutor name : {bookedTutor?.tutorName}
          </h2>

          {/* Tutor Language */}
          <p className="dark:text-gray-600 text-gray-400 ">
            <span className="font-semibold">Language:</span>{" "}
            {bookedTutor?.language}
          </p>

          {/* Tutor Price */}
          <p className="dark:text-gray-600 text-gray-400 ">
            <span className="font-semibold">Price:</span> ৳{bookedTutor?.price}
            /hour
          </p>
          {/* Buttons */}
          <div className="flex gap-3 text-xs text-gray-600 font-figtree mt-1">
            <button
              disabled={reviewed}
              onClick={handleReview}
              className="px-4 py-[2px]  rounded-lg font-medium bg-green-100 disabled:bg-gray-300 disabled:cursor-not-allowed "
            >
              {reviewed ? "Reviewed" : "Review"}
            </button>
            <button className="px-4 py-[2px] bg-red-100 rounded-lg  font-medium">
              Cancle
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

TutorBooked.propTypes = {
  bookedTutor: PropTypes.object,
};

export default TutorBooked;
