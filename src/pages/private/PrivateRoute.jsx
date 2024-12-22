import React from "react";
import UseAuth from "../../components/hooks/UseAuth";
import Loader from "../../components/Loader";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // auth context
  const { user , loader } = UseAuth();
  //   condition if user available or not
  if(user) {
    return children;
  }
  if(loader){
      <Loader/>
  }
  
  <Navigate to="/login"/>
 
};

export default PrivateRoute;
