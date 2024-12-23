import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


    // <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
    //   <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
    //     <img
    //       src={
    //         tutorDetails?.image || "https://source.unsplash.com/75x75/?portrait"
    //       }
    //       alt=""
    //       className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
    //     />
    //     <div className="p-2 pb-12 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-800 dark:bg-gray-50">
    //       <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
    //         <article className="space-y-8 text-gray-50 dark:text-gray-900">
    //           <div className="space-y-6">
    //             <h1 className="text-2xl font-bold md:tracking-tight md:text-3xl font-montserrat">
    //               Connect with {tutorDetails?.name} to learn the{" "}
    //               {tutorDetails?.language} language effectively and improve your
    //               communication skills step by step! 📚
    //             </h1>
    //             <div className="flex items-start justify-between md:space-x-2">
    //               <div className="flex justify-start items-center gap-3">
    //                 <img
    //                   src={
    //                     tutorDetails?.image ||
    //                     "https://source.unsplash.com/75x75/?portrait"
    //                   }
    //                   alt=""
    //                   className="w-8 h-8 border rounded-full bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
    //                 />
    //                 <p className="text-sm">
    //                   {tutorDetails?.name} • July 19th, 2021
    //                 </p>
    //               </div>
    //               <div className="flex flex-col justify-start items-start gap-4">
    //                 <p className="flex-shrink-0 mt-3 md:mt-0 capitalize bg-slate-400 dark:bg-[#f2f2f2] px-3 py-1 rounded-xl text-sm font-fira font-medium">
    //                   language : • {tutorDetails?.language}
    //                 </p>
    //                 <p className="flex-shrink-0 mt-3 md:mt-0 capitalize bg-slate-400 dark:bg-[#f2f2f2] px-3 py-1 rounded-xl text-sm font-fira font-medium">
    //                   price : {tutorDetails?.price} Taka
    //                 </p>
    //                 <p className="flex-shrink-0 mt-3  md:mt-0 capitalize bg-slate-400 dark:bg-[#f2f2f2] px-3 py-1 rounded-xl text-sm font-fira font-medium">
    //                   Reviewed by {tutorDetails?.review} Person
    //                 </p>
    //                 <Link>
    //                   <button className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 font-medium font-montserrat">BooK</button>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-gray-100 dark:text-gray-800">
    //             <h1 className="inline-block capitalize bg-slate-400 dark:bg-[#f2f2f2] px-3 py-1 rounded-md text-xl font-fira font-medium">Description : </h1>
    //             <p>
    //               Insert the actual text content here...
    //               {tutorDetails?.description}
    //             </p>
    //           </div>
    //         </article>
    //         <div>
    //           <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                
    //           </div>
    //           <div className="space-y-2">
    //             <h4 className="text-lg font-semibold">Related posts</h4>
    //             <ul className="ml-4 space-y-1 list-disc">
    //               <li>
    //                 <a
    //                   rel="noopener noreferrer"
    //                   href="#"
    //                   className="hover:underline"
    //                 >
    //                   Nunc id magna mollis
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   rel="noopener noreferrer"
    //                   href="#"
    //                   className="hover:underline"
    //                 >
    //                   Duis molestie, neque eget pretium lobortis
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   rel="noopener noreferrer"
    //                   href="#"
    //                   className="hover:underline"
    //                 >
    //                   Mauris nec urna volutpat, aliquam lectus sit amet
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  

const TutorDetails = () => {
    // custom axios hooks
    const axiosSecure = UseAxiosSecure();
    // id form params
    const { id } = useParams();
    // state for store tutor data
    const [tutorInfo, setTutorInfo] = useState([]);
    // fetch all data
    const fetchTutorData = async () => {
      const { data } = await axiosSecure.get(`/tutor/${id}`);
      setTutorInfo(data);
    };
    // for initial run
    useEffect(() => {
      fetchTutorData();
    }, [id]);
    console.log(tutorInfo);
    //
     return (
        <div className=" w-11/12 mx-auto p-6  dark:text-gray-200 transition duration-300">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <div className="flex items-center space-x-6">
              <img
                src={tutorInfo?.tutorImage || "https://via.placeholder.com/150"}
                alt="Tutor Profile"
                className="w-24 h-24 rounded-full border-2 border-primary"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 font-fira">{tutorInfo?.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 capitalize font-figtree">Expert <span className="text-red-400">{tutorInfo?.language}</span> language Tutor 🌟</p>
                <div className="flex items-center space-x-2 mt-2 font-figtree flex-wrap">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-500" />
                  ))}
                  <p className="text-gray-500 dark:text-gray-300">({tutorInfo?.review} Reviews)</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex justify-start items-center font-figtree"><FaBangladeshiTakaSign /><span>{tutorInfo?.price}/hour</span></h2>
              <button className="btn btn-primary mt-2 font-figtree">Book Now</button>
            </div>
          </div>
    
          {/* About Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-6 font-figtree">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 font-fira">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Hi! I'm {tutorInfo?.name}, a passionate {tutorInfo?.language} language tutor with 5+ years of experience helping students achieve fluency and confidence. 📚
            </p>
          </div>
          {/* description Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-6 font-figtree">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 font-fira">Description</h2>
            <p className=" mt-2 text-gray-600 dark:text-gray-300">
              {tutorInfo?.description}
            </p>
          </div>
          {/* Skills Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-6 font-figtree">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 font-fira">Skills & Expertise</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              <li>Grammar & Vocabulary</li>
              <li>Speaking & Pronunciation</li>
              <li>Writing & Reading Comprehension</li>
              <li>IELTS & TOEFL Preparation</li>
            </ul>
          </div>
    
          {/* Tutorial Images Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-6 font-figtree">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 font-fira">Tutorial Highlights</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore some snapshots from my interactive tutorials and lessons. 📷
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <img
                src={tutorInfo?.image || "https://via.placeholder.com/200"}
                alt="Tutorial 1"
                className="rounded-lg shadow w-52 sm:h-48 mx-auto"
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Tutorial 2"
                className="rounded-lg shadow w-52 sm:h-48 mx-auto"
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Tutorial 3"
                className="rounded-lg shadow w-52 sm:h-48 mx-auto"
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Tutorial 4"
                className="rounded-lg shadow w-52 sm:h-48 mx-auto"
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Tutorial 5"
                className="rounded-lg shadow w-52 sm:h-48 mx-auto"
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Tutorial 6"
                className="rounded-lg shadow w-52 sm:h-48 mx-auto"
              />
            </div>
          </div>
    
          {/* Availability Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-6 font-figtree">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 font-fira">Availability</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Check my schedule to book a slot that works for you! 🗓️
            </p>
            <button className="btn btn-primary mt-4">Book a Slot</button>
          </div>
    
          {/* Contact Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Contact Me</h2>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <FaEnvelope className="mr-2 text-primary" /> Email: mehedi@example.com
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <FaPhone className="mr-2 text-primary" /> Phone: +123 456 7890
              </p>
              <div className="flex space-x-4 truncate ">
                <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <FaFacebook className="mr-1" /> Facebook
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 flex items-center">
                  <FaTwitter className="mr-1" /> Twitter
                </a>
                <a href="#" className="text-red-500 hover:text-red-700 flex items-center">
                  <FaInstagram className="mr-1" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      );
};

export default TutorDetails;

