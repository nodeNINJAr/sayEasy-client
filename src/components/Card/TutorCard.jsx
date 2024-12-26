import React from "react";
import { FaRegHeart, FaShieldAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import arrowRight from "../../assets/lottie json file/details.json";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const TutorCard = ({ tutorData, categoriosData }) => {
  const { _id, name, tutorImage, language, description, price, review } =
    tutorData || categoriosData || {};
  return (
    <Fade duration={800}>
      <div className="mb-4 p-4 sm:py-4 sm:px-6 bg-white dark:bg-gray-700 border dark:border-gray-700 border-gray-200 rounded-lg shadow-md font-figtree">
        {/* Header Section */}
        <div className="flex items-center">
          {/* Profile Image */}
          <img
            className="w-16 h-16 rounded-full"
            src={tutorImage || "https://via.placeholder.com/64"}
            alt="Tutor Profile"
          />
          {/* Name and Title */}
          <div className="ml-4">
            <h3 className="text-lg font-semibold font-fira dark:text-[#c2c2c2] text-[#585858]">
              {name}
            </h3>
            <p className="text-sm dark:text-[#9b9b9b] text-gray-500 flex items-center capitalize">
              {language} language Tutor{" "}
              <FaShieldAlt className="ml-1 text-green-500" />
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-4 flex justify-between sm:justify-start items-center gap-1 sm:gap-4 truncate">
          <p className="text-sm">
            <span className="font-semibold dark:text-[#9b9b9b] text-[#747474]">
              SPEAKS:
            </span>
            <span className="text-green-500 ml-1 capitalize">{language}</span>
            <span className="text-gray-500 ml-1">(Native)</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold uppercase dark:text-[#9b9b9b] text-[#747474] truncate">
              Reviews: 5⭐({review})
            </span>
          </p>
        </div>

        {/* Description */}
        <div className="mt-4 dark:text-[#7d7d7d] text-gray-700">
          <p className="truncate">{description.substring(0, 170)}...</p>
        </div>

        {/* Pricing and Actions */}
        <div className="flex justify-between items-center mt-4 gap-2">
          <p
            title={`TAKA ${price} / hour`}
            className="text-base font-semibold dark:text-[#9c9c9c] text-gray-800 flex justify-start items-center gap-1 truncate"
          >
            <FaBangladeshiTakaSign />{" "}
            <span className="overflow-hidden">{price}/ hour</span>
          </p>
          {/* Button */}
          <div className="flex justify-center items-center gap-2">
            <span className="bg-gray-300 dark:bg-gray-600 p-2 rounded-full cursor-pointer">
              <FaRegHeart className="text-xl text-[#818181]" />
            </span>
            <Link to={`/tutor/${_id}`}>
              <button className="truncate px-3 py-[2px] text-sm font-semibold rounded-full capitalize text-[#818181] dark:bg-gray-600 bg-[#E5E8ED] hover:bg-[#d7dadf] transition flex justify-between items-center gap-2">
                <span>Tutor details</span>{" "}
                <Lottie
                  className="w-8 h-8"
                  animationData={arrowRight}
                  loop={true}
                ></Lottie>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

TutorCard.propTypes = {
  tutorData: PropTypes.object,
  categoriosData: PropTypes.object,
};

export default TutorCard;
