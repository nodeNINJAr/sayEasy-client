import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import toast from "react-hot-toast";
import UseAxiosSecure from "../hooks/axiosInstance/axiosSecure";

//
const MyPostCard = ({ post, refetch }) => {
    // 
    const axiosSecure = UseAxiosSecure()

    const handleDelete =async()=>{
        const {data} = await axiosSecure.delete(`/post/${post?._id}`)
        if(data?.result.deletedCount ===1){
            toast.success(data?.message);
            refetch()
          
        }
    }

    // 
  return (
    <div className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-900">
      <p className="mt-2 text-sm/6 text-black/50 dark:text-white/50">{post?.postContent}</p>
      <p className="mt-2 text-sm/6 text-black/50 dark:text-white/50 font-medium">{post?.date}</p>
      <div className="mt-4 space-x-2">
        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700">
          Update
        </Button>
        <Button onClick={handleDelete} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700">
          delete
        </Button>
      </div>
    </div>
  );
};

export default MyPostCard;
