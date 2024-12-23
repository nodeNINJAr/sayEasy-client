import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import Slider from "../components/Banner/Slider";
import Stats from "../components/Stats";
import LangCategory from "../components/langCategory/LangCategory";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <>
      <section className="py-20">
        <Slider />
      </section>
      {/* stats */}
      <section className="py-14 dark:bg-slate-600 bg-gray-100 dark:text-gray-100 text-gray-800">
          <Stats/>
      </section>
       {/* categorySlider */}
       <section className="py-14 dark:bg-slate-600 bg-gray-100 dark:text-gray-100 text-gray-800 mt-14">
          <LangCategory/>
      </section>
      
    </>
  );
};

Home.propTypes = {};

export default Home;
