import React, { createContext, useEffect, useState } from "react";
import UseAxiosSecure from "../components/hooks/axiosInstance/axiosSecure";
import PropTypes from "prop-types";
import UseAuth from "../components/hooks/UseAuth";

export const infoContext = createContext(null);
const InfoProvider = ({ children }) => {
  //
  const axiosSecure = UseAxiosSecure();
  // 
  const {user}= UseAuth();
  //
  const [tutors, setTutors] = useState([]);
  const [tutorCount , setTutorCount]= useState(0);
  const [usersCount , setUsersCount] = useState(0)
  const [refresh , setRefresh] = useState(false);


  // fetch all data
  const fetchALLTutor = async () => {
    const { data } = await axiosSecure.get('/tutorials');
    setTutors(data.tutoirals);
    setTutorCount(data.count)
  };
  // for initial run
  useEffect(() => {
    fetchALLTutor();
      //   
  }, [refresh]);

  //

  const fetchUsers = async () => {
    const { data } = await axiosSecure.get('/users');
    setUsersCount(data.users)
  };
  useEffect(()=>{
    fetchUsers()
  },[user])

  
  //
  const tutorInfo = {
    tutors,
    refresh,
    setRefresh,
    tutorCount,
    usersCount
    
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
