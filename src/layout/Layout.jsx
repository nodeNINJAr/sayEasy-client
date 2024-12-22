import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import UseAuth from "../components/hooks/UseAuth";
import Loader from "../components/Loader";

const Layout = () => {
  const { loader } = UseAuth();
  return (
    <>
      {!loader ? (
        <div className="container mx-auto">
          {/* navbar */}
          <Navbar />
          {/* main */}
          <main className="min-h-screen">
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
