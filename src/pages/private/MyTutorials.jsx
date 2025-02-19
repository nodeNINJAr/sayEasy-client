import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import UseAuth from "../../components/hooks/UseAuth";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import deleteSuccess from "../../assets/lottie json file/deleteForever.json";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet";
import noContent from "../../assets/lottie json file/noitemhere.json";
import Loader2 from "../../components/Loader/Loader2";
// 
const MyTutorials = () => {
  //auth context
  const { user } = UseAuth();
  // 
  const [loader , setLoader] = useState(true)
  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  // state for store tutor data
  const [specifiedTutorials, setSpecifiedTutorials] = useState([]);
  // fetch all data
  const fetchUserTutorials = async () => {
    const { data } = await axiosSecure.get(`/user-tutorials/${user?.email}`);
    setSpecifiedTutorials(data);
    setLoader(false)
  };
  // for initial run
  useEffect(() => {
    fetchUserTutorials();
  }, []);

  // handle tutorial update
  const handleDelete = async (tutorial_id) => {
    try {
      const { data } = await axiosSecure.delete(`/remove/${tutorial_id}`);
      if (data.deletedCount === 1) {
        toast.success(
          "Tutorial deleted successfully! 🗑️ The record has been removed. ✅",
          {
            position: "top-right",
            style: {
              background: "#f44336",
              color: "#ececec",
            },
            icon: (
              <Lottie
                className="w-14 h-14 mx-auto"
                animationData={deleteSuccess}
                loop={true}
              />
            ),
          }
        );
        fetchUserTutorials();
      }
    } catch (err) {
      toast.error("error", err);
    }
  };

  //  delete by toast
  const modernDelete = (tutorial_id) => {
    // customize toast
    toast((t) => (
      <span className="flex justify-between items-center gap-3">
        <b className="capitalize text-red-400">Are you Sure ?</b>
        <button
          className="bg-[#f2f2f2] text-slate-800 px-3 py-1 rounded-lg hover:bg-green-400 flex justify-start items-center gap-1"
          onClick={() => {
            toast.dismiss(t.id);
            handleDelete(tutorial_id);
          }}
        >
          {" "}
          <span>Yes</span> <AiTwotoneDelete className="text-red-500" />
        </button>
        <button
          className="bg-[#f2f2f2] text-slate-800 px-3 py-1 rounded-lg hover:bg-red-400 flex justify-start items-center gap-1"
          onClick={() => toast.dismiss(t.id)}
        >
          {" "}
          <span>Dismiss</span> <TiDeleteOutline className="text-green-500" />
        </button>
      </span>
    ));
  };
  //
  return (
    <>
      <Helmet>
        <title>My Tutorials || sayEasy</title>
      </Helmet>
      {/* hero */}
      <Hero path={location.pathname.split("/")} />
      {/*  */}
      { !loader ?
        <>
          {specifiedTutorials.length > 0 ? (
            <div className="overflow-x-auto bg-[#ebebeb] dark:bg-[#121224] px-10 py-10 md:py-20 rounded-xl ">
              <table className="table overflow-hidden">
                <thead className=" text-sm font-figtree font-medium capitalize ">
                  <tr className=" bg-slate-200 dark:bg-[#222133] dark:text-slate-400 dark:border-[#393939b7] h-14">
                    <th>name</th>
                    <th>language category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>reviewed by</th>
                    <th></th>
                    <th></th>
                    <th className="text-red-700">
                      Total Tutorial : {specifiedTutorials?.length}
                    </th>
                  </tr>
                </thead>
                {specifiedTutorials.map((tutorial) => (
                  <tbody key={tutorial._id}>
                    {/* row 1 */}
                    <tr className=" dark:hover:bg-slate-500 hover:bg-slate-200 bg-white dark:bg-[#121224] border-b  dark:border-none border-gray-200">
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={tutorial?.image} alt="tutorial image" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold truncate">
                              {tutorial?.name}
                            </div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="capitalize">
                        <span className="badge badge-ghost badge-neutral text-[#818181] dark:text-[#a8a8a8] dark:bg-gray-600 dark:border-[#5e5e5eb7] hover:bg-[#d7dadf] capitalize truncate">
                          {tutorial?.language}
                        </span>
                      </td>
                      <td className="text-[#818181] dark:text-[#a8a8a8] truncate">
                        {tutorial?.description.substring(0, 60)}...
                      </td>
                      <td>
                        {" "}
                        <span className="badge badge-ghost badge-neutral  text-[#818181] dark:text-[#a8a8a8] dark:bg-gray-600 dark:border-[#5e5e5eb7] hover:bg-[#d7dadf] capitalize truncate ">
                          {tutorial?.price} taka
                        </span>{" "}
                      </td>
                      <td>
                        {" "}
                        <span className="badge badge-ghost badge-neutral text-[#818181] dark:text-[#a8a8a8] dark:bg-gray-600 dark:border-[#5e5e5eb7] hover:bg-[#d7dadf] capitalize truncate">
                          {tutorial?.review} person
                        </span>
                      </td>
                      <th>
                        <Link to={`/tutor/${tutorial?._id}`}>
                          <button className=" bg-[#efefef] flex justify-start gap-2 px-2 py-1 rounded-lg items-center text-xs font-medium truncate hover:bg-slate-400 transition-all duration-300 text-slate-600 ">
                            <span>Tutorial details</span> <IoArrowRedoOutline />
                          </button>
                        </Link>
                      </th>
                      <th>
                        <Link
                          to={`/update-tutorial/${tutorial?._id}`}
                          state={tutorial}
                        >
                          <button className=" bg-[#efefef] hover:bg-green-200 flex justify-start gap-2 px-2 py-1 rounded-lg items-center text-xs font-medium truncate text-slate-600 transition-all duration-300">
                            <span>Update</span> <GrDocumentUpdate />
                          </button>
                        </Link>
                      </th>
                      <th>
                        <button
                          onClick={() => modernDelete(tutorial?._id)}
                          className=" bg-[#efefef] hover:bg-red-300 flex justify-start gap-2 px-2 py-1 rounded-lg items-center text-xs font-medium truncate text-slate-600 transition-all duration-300"
                        >
                          <span>Delete</span> <MdOutlineDeleteSweep />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : (
            <div className="w-3/4 sm:w-2/4 lg:w-1/4 mx-auto py-10 md:py-20">
              <Lottie animationData={noContent}></Lottie>
              <p className="text-center text-xl dark:text-gray-400 text-gray-600 capitalize mt-6 font-figtree">
                No Tutorials Here{" "}
                <span className="text-green-500 cursor-pointer hover:border-b">
                  Add First
                </span>
              </p>
            </div>
          )}
        </> : <Loader2/>
       
      }
    </>
  );
};

export default MyTutorials;
