import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSavedSearch } from 'react-icons/md';
import {motion} from 'framer-motion'

const ProductSearch = ({totalTutors , handleSearch}) => {
  
    return (
      <div className="p-6 mx-auto mb-6 md:mb-10">
        {/* Header with Search */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Total ({totalTutors}) Tutors
          </h1>
          <div className="flex items-center w-full sm:w-4/6 md:w-3/6 lg:w-2/6 relative">
            <input
              type="text"
              placeholder="Search Tutors... By Language"
              className="input input-bordered dark:bg-gray-700 dark:border-gray-700 border-gray-200 w-full  mr-2 text-gray-400"
            
              onChange={(e)=>handleSearch(e.target.value)}
            />
             <motion.span
              initial={{opacity:0.25}}
              animate={{opacity:1}}
              transition={{duration:3,
                repeat:Infinity,
                repeatType:"loop",
                ease:"easeInOut",
  
              }}
             className='absolute right-6'>
               <MdOutlineSavedSearch className='text-3xl dark:text-[#c2c2c2] text-[#585858]' />
             </motion.span>
          </div>
        </div>
      </div>
    );
};

ProductSearch.propTypes = {
  totalTutors:PropTypes.number,
    handleSearch:PropTypes.func.isRequired,
};

export default ProductSearch;