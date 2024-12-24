import React, { createContext, useEffect, useState } from "react";
import UseAxiosSecure from "../components/hooks/axiosInstance/axiosSecure";
import PropTypes from "prop-types";

export const infoContext = createContext(null);
const InfoProvider = ({ children }) => {
  //
  const axiosSecure = UseAxiosSecure();
  //
  const [tutors, setTutors] = useState([]);
  const [refresh , setRefresh] = useState(false);

  // fetch all data
  const fetchALLTutor = async () => {
    const { data } = await axiosSecure.get('/tutorials');
    setTutors(data);
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
  }, [refresh]);

  //
  const tutorInfo = {
    tutors,
    refresh,
    setRefresh
  };
  //
  return (
    <infoContext.Provider value={tutorInfo}>
        {children}
    </infoContext.Provider>
  );
};

InfoProvider.propTypes = {
    children: PropTypes.object.isRequired,
    infoContext:PropTypes.element
};


export default InfoProvider;
