import React, { useEffect } from 'react';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import UseAuth from '../UseAuth';


const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_base_url,
    withCredentials:true
  });

const UseAxiosSecure = () => {
  // auth context
  const authInfo = UseAuth();
  // 
    const navigate = useNavigate();
       
       useEffect(()=>{

            axiosSecure.interceptors.response.use((response)=>{
               return response
            },(error =>{
                if(error.response.status === 401 || error.response.status === 403){
                  authInfo?.userSignOut();
                  navigate('/login');
                }
                return Promise.reject(error);
            }))
       },[navigate, authInfo?.userSignOut])

    return axiosSecure
};

export default UseAxiosSecure;