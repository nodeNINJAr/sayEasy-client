import React from "react";
import PropTypes from "prop-types";
import Slider from "../components/Banner/Slider";
import Stats from "../components/Stats";
import LangCategory from "../components/langCategory/LangCategory";
import AboutUs from "../components/aboutUs/AboutUs";
import TestimonialsSection from "../components/testimonial/TestimonialSection";
import GetOurUpdates from "../components/GetOurUpdates";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home || sayEasy</title>
      </Helmet>
      <section className="py-6 xl:py-10 sm:px-6 ">
        <Slider />
      </section>
      {/* stats */}
      <section className="py-14 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500  dark:text-gray-100 text-gray-800">
        <Stats />
      </section>
      {/* categorySlider */}
      <section className="w-full sm:w-11/12 mx-auto py-14 dark:bg-slate-900 bg-gray-100 dark:text-gray-100 text-gray-800 px-4 sm:px-0">
        <LangCategory />
      </section>
      <section>
        <AboutUs />
      </section>
      <section className="px-4 md:px-0 md:w-11/12 mx-auto py-10 sm:py-14 overflow-hidden">
        <TestimonialsSection />
      </section>
      {/* get our updates */}
      <section>
        <GetOurUpdates />
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;
