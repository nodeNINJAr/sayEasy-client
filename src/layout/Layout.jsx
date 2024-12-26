import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet} from "react-router-dom";
import UseAuth from "../components/hooks/UseAuth";
import Loader from "../components/Loader";
import DarkModeToggle from "../components/darkmode/DarkModeToggle";

const Layout = () => {
  const { loader } = UseAuth();
// 
  return (
    <>
      {!loader ? (
        <div className="container mx-auto">
           <DarkModeToggle />
          {/* navbar */}
          <Navbar />
          {/* main */}
          <main className='dark:bg-gray-900 bg-gray-100 dark:text-gray-100 text-gray-800 pb-20'>
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
