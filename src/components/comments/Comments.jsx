import React, { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import UseAxiosSecure from "../hooks/axiosInstance/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const Comments = ({ postId }) => {
  //
  const { user } = UseAuth();
  //
  const axiosSecure = UseAxiosSecure();
  //
  const [collectComment, setCollectComment] = useState("");

  //fetch all comments on a post
  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/comments?postId=${postId}`);
      return data;
    },
  });

  //
  const handleAddComment = async () => {
    const comment = collectComment;
    const commentCollection = {
      postId: postId,
      comment: comment,
      userName: user?.displayName,
      userEmail: user?.email,
      userImage: user?.photoURL,
    };

    const { data } = await axiosSecure.post("/comment", commentCollection);
    if (data?.insertedId) {
      refetch();
    }
    if (data?.message) {
      toast.loading(`${data?.message}`, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#ffffff",
          background: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
  };
  //
  if (comments.find((item) => item?.postId !== postId)) {
    return;
  }

  const handleDeleteComments = async (id) => {
    const { data } = await axiosSecure.delete(`/comment/${id}`);
    if (data?.deletedCount === 1) {
      refetch();
    }
  };

  //
  return (
    <div
      className={`${
        comments.length > 0 ? "h-[250px]" : "h-min"
      } bg-gray-50 dark:bg-gray-600 mt-2 p-4 rounded-xl space-y-1 overflow-y-auto`}
    >
      {comments.length > 0 ? (
        <>
          {comments.map((comment) => (
            <div className="bg-gray-200 dark:bg-gray-500 p-2 rounded-md flex justify-start  items-start gap-3 relative ">
              <img
                className="w-8 h-8 rounded-full"
                src={comment?.userImage || "https://via.placeholder.com/150"}
                alt="img"
              />
              <div>
                <h4 className="text-sm dark:text-gray-300">
                  {comment?.userName}
                </h4>
                <p className="text-xs">{comment?.comment}</p>
              </div>
              {/* delete */}
              {comment?.userEmail === user?.email && (
                <div className="absolute right-2">
                  <span
                    className="text-xl text-red-500 cursor-pointer"
                    onClick={() => handleDeleteComments(comment?._id)}
                  >
                    {" "}
                    <MdDeleteForever />
                  </span>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <h1 className="text-xs text-gray-400 mb-6">No comments on this post</h1>
      )}

      <div className="sticky bottom-0 mt-2 ">
        <textarea
          onChange={(e) => setCollectComment(e.target.value)}
          type="text"
          name="comment"
          className="w-full mx-auto px-4 py-1 bg-gray-50 dark:bg-gray-600 border border-gray-200 rounded-lg placeholder:text-xs"
          placeholder="Add Your Comment On This Post"
        />
        <button
          onClick={handleAddComment}
          className="text-xs bg-gray-300 rounded-lg px-2 py-1 text-gray-500 font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comments;
