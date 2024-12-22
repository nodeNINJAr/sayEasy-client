import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import Slider from "../components/slider/Slider";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <>
      <section className="py-20">
          <Slider />
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;
