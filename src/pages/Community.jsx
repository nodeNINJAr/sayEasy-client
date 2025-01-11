import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../components/hooks/axiosInstance/useAxiosPublic";
import CommunityCard from "../components/Card/CommunityCard";
import TutorCard from "../components/Card/TutorCard";
import Hero from "../components/hero/Hero";
import { Link, useLocation } from "react-router-dom";
import AddPost from "./private/AddPost";
import { Button } from "@headlessui/react";

const Community = () => {
  //modal
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  //
  const location = useLocation();
  //
  const axiosPublic = useAxiosPublic();

  //
  const { data: communityPosts = [], refetch } = useQuery({
    queryKey: ["community-posts"],
    queryFn: async () => {
      const { data } = await axiosPublic("/communityPosts");
      return data;
    },
  });
  //
  const { data: tutorials = [] } = useQuery({
    queryKey: ["latest-tutorials"],
    queryFn: async () => {
      const { data } = await axiosPublic("/latest-tutorials");
      return data;
    },
  });

  //
  return (
    <>
      <Hero path={location.pathname.split("/")}></Hero>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-20">
        {/* post */}
        <div className="col-span-1 md:col-span-2 ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold uppercase font-fira mb-6">
              Latest posts
            </h2>
            <div className="space-x-4">
              <Button
                onClick={open}
                className="rounded-md bg-black/20 dark:bg-white/20 py-2 px-4 text-base font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                Add Post
              </Button>

              <Link to='/my-posts'>
                <Button className="rounded-md bg-black/20 dark:bg-white/20 py-2 px-4 text-base font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white">
                  My Post
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1">
            {communityPosts.map((post) => (
              <CommunityCard key={post?._id} post={post} />
            ))}
          </div>
        </div>
        {/*tutor content */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold uppercase font-fira mb-6">
            Latest Tutorials
          </h2>
          {tutorials?.map((tutorial) => (
            <TutorCard key={tutorial?._id} latesttutotial={tutorial} />
          ))}
        </div>
      </div>
      {/* modal */}
      {isOpen && <AddPost refetch={refetch} isOpen={isOpen} close={close} />}
    </>
  );
};

export default Community;
