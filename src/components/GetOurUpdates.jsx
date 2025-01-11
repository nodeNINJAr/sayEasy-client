import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import useAxiosPublic from "./hooks/axiosInstance/useAxiosPublic";
import toast from "react-hot-toast";

const GetOurUpdates = () => {
  const axiosPublic = useAxiosPublic();

  //
  const handleSubscribe =async(e)=>{
     e.preventDefault();
     const email = e.target.email.value;
     if(email===""){
      return toast.loading('Please Write Your Email')
     }
      try{
        const {data} = await axiosPublic.post('/subscribe', {email});
        if(data?.insertedId){
         toast.success("Thanks For Your Subscribe");
         e.target.reset();
        }
      }catch(err){
        toast.error(err?.response?.data?.message)
      }
  }

  //
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900  p-4 py-6 md:p-10">
      <div className="container flex flex-col flex-wrap content-center justify-center mx-auto ">
        <Slide direction="down">
          <h1 className="text-[40px] sm:text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100 text-gray-800">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100 text-gray-700">
            Find out about events and other news
          </p>
        </Slide>
        <Slide direction="up">
          <form onSubmit={handleSubscribe}>
            <div className="flex flex-row">
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="submit"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                Subscribe
              </button>
            </div>
          </form>
        </Slide>
      </div>
    </div>
  );
};

export default GetOurUpdates;
