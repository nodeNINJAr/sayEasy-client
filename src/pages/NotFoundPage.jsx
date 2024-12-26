import Lottie from "lottie-react";
import React from "react";
import notFound from "../assets/lottie json file/error.json";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
       <Helmet>
        <title>Not Found || sayEasy</title>
      </Helmet>
      <Lottie animationData={notFound} loop={true}></Lottie>
      <div className="-mt-40 z-30">
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          className="btn btn-primary mt-6 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
