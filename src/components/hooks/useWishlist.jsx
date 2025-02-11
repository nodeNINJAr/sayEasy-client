import React from 'react'
import UseAxiosSecure from './axiosInstance/axiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './UseAuth';

const useWishlist = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const {
      data: wishlist = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["wishlists"],
      queryFn: async () => {
        const { data } = await axiosSecure(`/wishLists/${user?.email}`);
        return data;
      },
    });


  return [wishlist, isLoading, refetch]
}

export default useWishlist