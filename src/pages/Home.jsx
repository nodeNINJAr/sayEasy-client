import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import Slider from "../components/Banner/Slider";
import Stats from "../components/Stats";
import LangCategory from "../components/langCategory/LangCategory";
import DarkModeToggle from "../components/darkmode/DarkModeToggle";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <>
      <section className="py-20">
        <Slider />
      </section>
      {/* stats */}
      <section className="py-14 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
          <Stats/>
      </section>
       {/* categorySlider */}
       <section className="py-14 bg-gray-800 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <LangCategory/>
      </section>
      
    </>
  );
};

Home.propTypes = {};

export default Home;
