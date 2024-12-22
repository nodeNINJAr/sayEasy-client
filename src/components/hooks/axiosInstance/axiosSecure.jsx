import React from 'react';
import axios from 'axios'


const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_base_url,
    withCredentials:true
  });

const UseAxiosSecure = () => {


    return axiosSecure
};

export default UseAxiosSecure;