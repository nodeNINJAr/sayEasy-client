import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import UseAuth from "../../components/hooks/UseAuth";
import MyPostCard from "../../components/Card/MyPostCard";
import Loader2 from "../../components/Loader/Loader2";

const MyPost = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  //
  const {
    data: myPosts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["posts", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/posts/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader2 />;
  }
  //
  return (
    <>
      {myPosts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-10 md:py-20">
          {myPosts?.map((post) => (
            <MyPostCard refetch={refetch} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-2xl text-red-500 font-medium text-center flex justify-center items-center min-h-dvh">
          No Post Here
          <br />
          You Need To Post First
        </p>
      )}
    </>
  );
};

export default MyPost;
