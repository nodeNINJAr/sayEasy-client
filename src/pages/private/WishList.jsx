import React from "react";
import WishlistCard from "../../components/Card/WishlistCard";
import toast from "react-hot-toast";
import noContent from "../../assets/lottie json file/noitemhere.json";
import Lottie from "lottie-react";
import Loader2 from "../../components/Loader/Loader2";
import useWishlist from "../../components/hooks/useWishlist";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";


//
const WishList = () => {
   const axiosSecure = UseAxiosSecure()
    // 
  const [wishlist, isLoading, refetch] = useWishlist();
  //
  const handleWishRemove = async (id) => {
    const { data } = await axiosSecure.delete(`/wishlist/${id}`);
    //
    if (data?.deletedCount === 1) {
      refetch();
      toast.success("Tuturial removed from wishlist");
      return;
    }
  };
  //
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center font-fira font-semibold text-4xl py-10">
        My WishList
      </h1>
       {isLoading&&<Loader2/>}
      {wishlist.length > 0 ? (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <WishlistCard
              key={item?._id}
              {...item}
              handleWishRemove={handleWishRemove}
            />
          ))}
        </div>
      ) : (
        <div className="w-3/4 sm:w-2/4 lg:w-1/4 mx-auto py-10 md:py-20">
          <Lottie animationData={noContent}></Lottie>
          <p className="text-center text-xl dark:text-gray-400 text-gray-600 capitalize mt-6 font-figtree">
           Empty Wishlist {" "}
            <span className="text-green-500 cursor-pointer hover:border-b">
              Add First
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WishList;
