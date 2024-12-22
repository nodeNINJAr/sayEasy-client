import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <nav className=" bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 p-4">
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
        <ul className="hidden md:flex space-x-6 capitalize font-figtree justify-end w-1/2 lg:w-7/12 mx-auto">
          <li className="list-none">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/find-tutors">Find tutors</NavLink>
          </li>
        </ul>

        {/* Button for large screens */}
        <div className="flex justify-start items-center gap-3  capitalize">
          {user ? (
            <>
              {/* user profile */}
              <Profile user={user} />
              {/* signOut */}
              <Link to="/">
                <button
                  onClick={handleSignOut}
                  className="hidden md:flex ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  sign Out
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* login */}
              <Link to="/login">
                <button className="ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Log in
                </button>
              </Link>
              {/* signUp */}
              <Link to="/signUp">
                <button className="ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  signUp
                </button>
              </Link>
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
              <NavLink to="/find-tutors">Find tutors</NavLink>
            </li>
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
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
