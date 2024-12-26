import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoCard = () => {
  return (
    <div className="w-full  bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x200" 
          alt="Video thumbnail"
          className="rounded-lg w-full mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition"
            aria-label="Play video"
          >
            <FaPlay className="text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default VideoCard;
