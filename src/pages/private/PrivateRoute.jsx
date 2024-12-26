import React from "react";
import UseAuth from "../../components/hooks/UseAuth";
import Loader from "../../components/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // auth context
  const { user , loader } = UseAuth();
  const location = useLocation();
  //   condition if user available or not
  if(loader){
    return <Loader/>
  }
  if(user) {
    return children;
  }
   return <Navigate to="/login" state={location.pathname}/>
 
};

export default PrivateRoute;
