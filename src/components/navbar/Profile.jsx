
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import {FiUser } from "react-icons/fi";
import { MdAddToPhotos } from "react-icons/md";
import { SiAlchemy } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="relative group">
      {/* Profile Avatar */}
      <div className="h-12 w-12 border-2 border- rounded-full flex items-center justify-center text-white text-xl font-bold cursor-pointer">
      <img alt="m" className="w-12 h-12 rounded-full ring-1 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?4" />
      </div>

      {/* Hidden Profile Card */}
      <div className="absolute top-14 left-0 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 scale-95 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        {/* Profile Info */}
        <div className="flex items-center gap-4 border-b pb-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
          <img alt="m" className="w-12 h-12 rounded-full ring-1 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?4" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-400">Mehedi Hasan</h3>
              <button>
                <FiUser className="text-gray-500" />
              </button>
            </div>
            <p className="text-sm text-gray-500">Learning English</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 mt-4 capitalize">
          <NavLink to='/add-tutorial' className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 p-2 rounded">
            <MdAddToPhotos className="text-lg" />
            <span className="text-sm font-medium">Add Tutorials</span>
          </NavLink>
          <NavLink to='/tutorials' className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 p-2 rounded">
             <SiAlchemy className="text-lg" />
            <span className="text-sm font-medium">My Tutorials</span>
          </NavLink>
          <NavLink to='/booked-tutors' className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 p-2 rounded">
           <CiBookmarkCheck className="text-lg" />
            <span className="text-sm font-medium">My booked tutors</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
