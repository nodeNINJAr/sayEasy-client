import { useState } from "react";
import { FaBars, FaTimes, FaUserAltSlash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Profile from "./Profile";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  // auth context
  const { userSignOut, user } = UseAuth();
  //
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // user sign out from firebase
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("👋 You’ve successfully signed out. See you next time!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  return (
    <nav className=" dark:bg-gray-800 bg-gray-50 dark:text-gray-100 text-gray-800 p-4">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <div className="text-2xl font-bold flex justify-start items-center gap-4">
          {/* Hamburger icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <a href="/">SayEasy</a>
        </div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex space-x-6 capitalize font-figtree justify-end items-center w-1/2 lg:w-7/12">
          <li className="list-none">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/tutors">Find tutors</NavLink>
          </li>

          {user ? (
            <>
              {/* user profile */}
              <Profile user={user} />
              {/* signOut */}
              <Link to="/">
                <button
                  onClick={handleSignOut}
                  className="w-full  capitalize bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  sign Out
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* login */}
              <li className="list-none">
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li className="list-none">
                <NavLink to="/signUp">signUp</NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="flex md:hidden">
          {user ? (
            <>
              {/* user profile */}
              <Profile user={user} />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center">
                <div className="flex space-x-5">
                   <span className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100 flex justify-center items-center"><FaUserAltSlash className="text-2xl" /></span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Menu for small screens */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-3/4 sm:w-1/2 h-full bg-gray-800 z-50 text-white p-6 md:hidden transition-all duration-300">
          <ul className="space-y-4 capitalize font-figtree ">
            <li className="list-none">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-none">
              <NavLink to="/tutors">Find tutors</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  {/* signOut */}
                  <Link to="/">
                    <button
                      onClick={handleSignOut}
                      className="w-full capitalize bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      sign Out
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* login */}
                <li className="list-none">
                  <NavLink to="/login">Log in</NavLink>
                </li>
                <li className="list-none">
                  <NavLink to="/signUp">signUp</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
