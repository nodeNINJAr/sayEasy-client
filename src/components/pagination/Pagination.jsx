import React from "react";
import PropTypes from 'prop-types';
const Pagination = ({ setCurrentPage, pages ,currentPage,numberOfpages }) => {

    const handlePrev=()=>{
       if(currentPage > 1){
        setCurrentPage(currentPage-1)
       }
    }
    
    const handleNext=()=>{
        if(numberOfpages > currentPage){
            setCurrentPage(currentPage+1)
        }
    }
    
  return (

    <div className="flex justify-center space-x-1 text-gray-100 dark:text-gray-800">
        {/* prev button */}
        <button onClick={handlePrev} title="previous" type="button" className="hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all ease-in-out inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 dark:bg-gray-50 border-gray-300 dark:border-gray-600">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>

            {/*  */}
            {pages.map((i, idx) => (
                <button
                key={idx}
                onClick={() => setCurrentPage(i + 1)}
                title="previous"
                type="button"
                className={`${currentPage === i+1 ? "bg-indigo-600" : "bg-gray-900 dark:bg-gray-50" } inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow border-gray-400 dark:border-gray-600 font-fira font-medium text-sm`}
                >
                {i + 1}
                </button>
            ))}

        {/* next button */}
        <button onClick={()=>handleNext(currentPage)} title="next" type="button" className="hover:bg-indigo-600 dark:hover:bg-indigo-400  transition-all ease-in-out inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 dark:bg-gray-50 border-gray-300 dark:border-gray-600">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
</div>
  );
 
};

Pagination.propTypes = {
  setCurrentPage:PropTypes.func,
  pages:PropTypes.array,
  currentPage:PropTypes.number, 
  numberOfpages:PropTypes.number,
};
export default Pagination;


