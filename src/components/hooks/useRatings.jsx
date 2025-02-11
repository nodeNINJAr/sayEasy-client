import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useRatings = () => {
    
    const {data:userRatings =[], isLoading}= useQuery({
      queryKey:['ratings'],
      queryFn:async()=>{
        const {data} = await axios('/ratingsData.json')
        return data
      }
    })

  return [userRatings, isLoading]
}

export default useRatings