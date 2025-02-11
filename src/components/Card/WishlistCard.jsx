import React from "react";
import { Link } from "react-router-dom";

const WishlistCard = ({_id, name, tutorImage, language, price , handleWishRemove}) => {

// 
  return (
    <div className="flex items-center justify-between flex-wrap p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
      {/* Tutor Image (Left Side) */}
      <div className="flex-shrink-0">
        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          src={tutorImage}
          alt={name}
        />
      </div>

      {/* Tutor Details (Right Side) */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold dark:text-white truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Teaches: <span className="font-medium truncate">{language}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Price: <span className="font-medium truncate">${price}</span> per
          session
        </p>
      </div>

      {/* View Profile Button */}
      <div className="flex justify-center items-center gap-2 mt-2 sm:mt-0">
        <Link to={`/tutor/${_id}`}>
          <button className="bg-[#B252F7] hover:bg-[#B252F7] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
          Tutor details
          </button>
        </Link>
        <button onClick={()=>handleWishRemove(_id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
