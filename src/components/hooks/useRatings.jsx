import React, { useEffect, useState } from 'react'

const useRatings = () => {
    const [userRatings , setUserRatings] = useState([])
    
    useEffect(()=>{
        fetch('/ratingsData.json')
        .then(res=> res.json())
        .then(data=>setUserRatings(data) )
    },[]);

  return userRatings || []
}

export default useRatings