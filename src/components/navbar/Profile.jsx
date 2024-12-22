import PropTypes from 'prop-types';
import { FiUser } from "react-icons/fi";
import { MdAddToPhotos } from "react-icons/md";
import { SiAlchemy } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Profile = ({user}) => {
  return (
    <div className="relative">
      {/* Profile Avatar */}
      <div className="relative h-12 w-12 group">
        <img referrerPolicy='no-referrer'
          alt="Profile"
          className="w-12 h-12 rounded-full ring-1 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100 cursor-pointer"
          src={user?.photoURL}
        />

        {/* Hidden Profile Card */}
        <div className="absolute top-14 -left-20  w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 scale-95 transform transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 z-10 pointer-events-none group-hover:pointer-events-auto">
          {/* Profile Info */}
          <div className="flex items-center gap-4 border-b pb-4">
            <div className="h-12 w-12">
              <img referrerPolicy='no-referrer'
                alt="Profile pic"
                className="w-12 h-12 rounded-full ring-1 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100"
                src= {user?.photoURL}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-700">
                  {user?.displayName}
                </h3>
                <button>
                  <FiUser className="text-gray-500" />
                </button>
              </div>
              <p className="text-sm text-gray-500">Learning English</p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4 mt-4 capitalize">
            <NavLink
              to="/add-tutorial"
              className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              <MdAddToPhotos className="text-lg" />
              <span className="text-sm font-medium">Add Tutorials</span>
            </NavLink>
            <NavLink
              to="/tutorials"
              className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              <SiAlchemy className="text-lg" />
              <span className="text-sm font-medium">My Tutorials</span>
            </NavLink>
            <NavLink
              to="/booked-tutors"
              className="flex items-center gap-3 w-full text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              <CiBookmarkCheck className="text-lg" />
              <span className="text-sm font-medium">My Booked Tutors</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user:PropTypes.object.isRequired
};

export default Profile;

