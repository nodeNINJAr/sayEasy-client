import React from 'react';
import PropTypes from 'prop-types';


const ProductSearch = ({tutorsData , handleSearch}) => {
  
    return (
      <div className="p-6 mx-auto   mb-12">
        {/* Header with Search */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Total ({tutorsData?.length}) Tutors
          </h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Tutor By Language"
              className="input input-bordered dark:border-slate-100 w-full  mr-2 text-gray-400"
            
              onBlur={(e)=>handleSearch(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    );
};

ProductSearch.propTypes = {
    tutorsData:PropTypes.array.isRequired,
    handleSearch:PropTypes.func.isRequired,
};

export default ProductSearch;