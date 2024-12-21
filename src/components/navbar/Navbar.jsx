import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";

const Navbar = () => {
  //
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <div className="text-2xl font-bold flex justify-start items-center gap-4">
          {/* Hamburger icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <a href="/">Logo</a>
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
        <div className="flex justify-start items-center gap-3 ">
          <Profile />
          <button className="ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Log in
          </button>
          <button className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Menu for small screens */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-2/4 h-full bg-gray-800 text-white p-6 md:hidden transition-all duration-300">
          <ul className="space-y-4 capitalize font-figtree ">
            <li className="list-none">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-none">
              <NavLink to="/find-tutors">Find tutors</NavLink>
            </li>
            <li>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={toggleMenu}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
