import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import UseAuth from "../../components/hooks/UseAuth";
import { IoArrowRedoOutline } from "react-icons/io5";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineDeleteSweep } from "react-icons/md";
const MyTutorials = () => {
  //auth context
  const { user } = UseAuth();

  // custom axios hooks
  const axiosSecure = UseAxiosSecure();
  // state for store tutor data
  const [specifiedTutorials, setSpecifiedTutorials] = useState([]);
  // fetch all data
  const fetchUserTutorials = async () => {
    const { data } = await axiosSecure.get(`/user-tutorials/${user?.email}`);
    setSpecifiedTutorials(data);
  };
  // for initial run
  useEffect(() => {
    fetchUserTutorials();
  }, []);
  //
  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      <table className="table">
        <thead className="text-sm font-figtree font-medium capitalize bg-slate-200">
          <tr>
            <th>name</th>
            <th>category</th>
            <th>Description</th>
            <th>Price</th>
            <th>review</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {specifiedTutorials.map((tutorial) => (
          <tbody key={tutorial._id}>
            {/* row 1 */}
            <tr className="hover:bg-slate-600 dark:hover:bg-slate-100">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={tutorial?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold truncate">{tutorial?.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td className="capitalize">
                <span className="badge badge-ghost badge-neutral ">
                {tutorial?.language} 
                </span>
              </td>
              <td >{tutorial?.description.substring(0,60)}...</td>
              <td> <span className="badge badge-ghost badge-neutral capitalize truncate ">{tutorial?.price} taka</span> </td>
              <td> <span className="badge badge-ghost badge-neutral capitalize truncate">{tutorial?.review} person</span></td>
              <th>
                <button className=" bg-[#efefef] flex justify-start gap-2 px-2 py-1 rounded-lg items-center text-xs font-medium truncate hover:bg-slate-400 transition-all duration-300 text-slate-600 ">
                  <span>Tutorial details</span> <IoArrowRedoOutline />
                </button>
              </th>
              <th>
                <button className=" bg-[#efefef] hover:bg-green-200 flex justify-start gap-2 px-2 py-1 rounded-lg items-center text-xs font-medium truncate text-slate-600 transition-all duration-300"><span>Update</span> <GrDocumentUpdate /></button>
              </th>
              <th>
                <button className=" bg-[#efefef] hover:bg-red-300 flex justify-start gap-2 px-2 py-1 rounded-lg items-center text-xs font-medium truncate text-slate-600 transition-all duration-300"><span>Delete</span> <MdOutlineDeleteSweep /></button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyTutorials;
