import React from 'react';
import { Fade } from "react-awesome-reveal";
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const CommunityCard = ({post}) => {
const {username,userImage,postContent,date,category} = post || {}

    return (
        <Fade duration={800}>
        <div className="mb-4 p-4 sm:py-4 sm:px-6 bg-white dark:bg-gray-700 border dark:border-gray-700 border-gray-200 rounded-lg shadow-md font-figtree">
          {/* Header Section */}
          <div className="flex items-center">
            {/* Profile Image */}
            <img
              className="w-16 h-16 rounded-full"
              src={userImage || "https://via.placeholder.com/64"}
              alt="Tutor Profile"
            />
            {/* Name and Title */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold font-fira dark:text-[#c2c2c2] text-[#585858]">
                {username}
              </h3>
              {/* <p className="text-sm dark:text-[#9b9b9b] text-gray-500 flex items-center capitalize">
                {language} language Tutor{" "}
                <FaShieldAlt className="ml-1 text-green-500" />
              </p> */}
            </div>
          </div>
  
          {/* Languages */}
          <div className="mt-4 flex justify-between sm:justify-start items-center gap-1 sm:gap-4 truncate">
            <p className="text-sm">
              <span className="font-semibold dark:text-[#9b9b9b] text-[#747474]">
                Topic:
              </span>
              <span className="text-green-500 ml-1 capitalize">{category}</span>
            </p>
           
          </div>
  
          {/* post details */}
          <div className="mt-4 dark:text-[#7d7d7d] text-gray-700">
            <p className="truncate">{postContent}...</p>
          </div>
  
          {/*post date and comments section*/}
          <div className="flex justify-between items-center mt-4 gap-2">
            <p
              className="text-base font-semibold dark:text-[#9c9c9c] text-gray-800 flex justify-start items-center gap-1 truncate"
            >
              <span className="overflow-hidden flex justify-start items-center gap-2"> <CiCalendarDate /> Posted On :{date}</span>
            </p>
            {/* Button */}
            <div className="flex justify-center items-center gap-2">
              <Link>
                <button className="truncate px-3 py-[2px] text-sm font-semibold rounded-full capitalize text-[#818181] dark:bg-gray-600 bg-[#E5E8ED] hover:bg-[#d7dadf] transition flex justify-between items-center gap-2">
                  <span>Comments</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    );
};

export default CommunityCard;