import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import UseAuth from "../components/hooks/UseAuth";
import Loader from "../components/Loader";
import DarkModeToggle from "../components/darkmode/DarkModeToggle";

const Layout = () => {
  const { loader } = UseAuth();
  return (
    <>
      {!loader ? (
        <div className="container mx-auto">
           <DarkModeToggle />
          {/* navbar */}
          <Navbar />
          {/* main */}
          <main className="min-h-screen  bg-gray-800 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <Outlet />
          </main>
          {/* footer */}
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Layout;
