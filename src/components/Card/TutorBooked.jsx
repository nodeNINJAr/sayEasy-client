import React from 'react';
import PropTypes from 'prop-types';

const TutorBooked = ({tutor}) => {
    
    return (
        <div className="flex items-center max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        {/* Tutor Image */}
        <img
          src={tutor.tutorImage}
          alt={tutor.tutorName}
          className="w-24 h-24 rounded-full object-cover"
        />
  
        {/* Content */}
        <div className="ml-4 flex-1">
          {/* Tutor Name */}
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {tutor.tutorName}
          </h2>
  
          {/* Tutor Language */}
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            <span className="font-semibold">Language:</span> {tutor.language}
          </p>
  
          {/* Tutor Price */}
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            <span className="font-semibold">Price:</span> ৳{tutor.price}/hour
          </p>
  
          {/* Buttons */}
          <div className="mt-4 flex space-x-2">
            <button className="btn btn-secondary">Review</button>
            <button className="btn btn-secondary">Cancle</button>
          </div>
        </div>
      </div>
    );
};

TutorBooked.propTypes = {
    tutor:PropTypes.object,
};

export default TutorBooked;