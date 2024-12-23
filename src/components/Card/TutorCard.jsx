import React from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TutorCard = ({ tutorData , categoriosData}) => {
  const {_id, name, tutorImage, language, description, price, review } =
    tutorData || categoriosData || {};
  return (
    <div className="flex flex-wrap mx-auto p-4 bg-white shadow-lg rounded-md border dark:bg-gray-700 dark:border-gray-600 border-gray-200">
      {/* Image Section */}
      <img
        src={tutorImage || "https://via.placeholder.com/120"}
        alt="Tutor"
        className="w-24 h-24 rounded-full border shadow-sm"
      />

      {/* Info Section */}
      <div className="ml-4 flex-1 flex-wrap">
        {/* Name and Badge */}
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {name}
            <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
              🇵🇱
            </span>
          </h2>
        </div>

        {/* Language and Lessons */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          <HiOutlineGlobeAlt className="inline-block mr-1 text-gray-500" />{" "}
          {language}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          <FaUser className="inline-block mr-1 text-gray-500" /> 24 active
          students · 2,712 lessons
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Speaks English (Proficient), Polish (Native)
        </p>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {description.substring(0, 60)}...
        </p>
      </div>

      {/* Rating and Price Section */}
      <div className="flex flex-col items-end ">
        {/* Rating */}
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            5
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({review}reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 text-right">
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            BDT {price}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            50-min lesson
          </span>
        </div>

        {/* Button */}
        <Link to={`/tutor/${_id}`}>
          <button className="mt-4 px-6 py-2 text-sm font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 transition">
            Book trial lesson
          </button>
        </Link>
      </div>
    </div>
  );
};

TutorCard.propTypes = {
  tutorData: PropTypes.object.isRequired,
  categoriosData:PropTypes.object.isRequired
};

export default TutorCard;
