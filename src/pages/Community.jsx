import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../components/hooks/axiosInstance/useAxiosPublic';
import CommunityCard from '../components/Card/CommunityCard';

const Community = () => {
    const axiosPublic = useAxiosPublic();
    
    // 
    const {data:communityPosts =[]} = useQuery({
        queryKey:['community-posts'],
        queryFn:async()=>{
           const {data} = await axiosPublic('/communityPosts');
           return data
        }
    
    })
    console.log(communityPosts);
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-20'>
            {/* post */}
             <div className='col-span-1 md:col-span-2'>
                {
                communityPosts.map((post) =>(
                   <CommunityCard post={post}/>
                ))
                }
             </div>
             {/*tutor content */}
              <div className='md:col-span-1'>tutor content</div>
        </div>
    );
};

export default Community;