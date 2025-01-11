import React from "react";


const Sort = ({handleSort}) => {

  return (
    <div className="w-full sm:w-52">
        <select onChange={(e)=>handleSort(e.target.value)} defaultValue={""} className="w-full bg-white dark:bg-gray-700 outline-none py-3 rounded-lg px-2 text-gray-400">
            <option value=''>Sort By</option>
            <option value={'price'}> Price</option>
            <option value={'review'}> Reviews</option>
        </select>
    </div>
  );
};

export default Sort;
