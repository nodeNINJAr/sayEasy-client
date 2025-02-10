import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const TestimonialCard = ({ name, role, text, rating }) => {
     
      const renderStars =()=>{
        const stars = []
         for(let i = 1; i <= 5; i++){
            stars.push(
              <FaStar
              key={i}
              className={i <= rating ? "text-yellow-400" : "text-gray-300"}
            />
            )
         }
         return stars
      }

     // 
    return (
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg p-6 font-figtree">
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <div className="text-teal-500 text-5xl">
            <FaUserCircle />
          </div>
          {/* Name and Role */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-fira">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{role}</p>
          </div>
        </div>
        {/* Testimonial Text */}
        <p className="text-xl mt-4 text-gray-700 dark:text-gray-300 font-bold ">{text}</p>
        {/* Star Ratings */}
        <div className="mt-4 flex items-center space-x-1">
           {renderStars()}
        </div>
      </div>
    );
};

export default TestimonialCard;