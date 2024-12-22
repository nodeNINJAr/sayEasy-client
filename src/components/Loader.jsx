import React from 'react';

const Loader = () => {
    return (
        <div className='w-full mx-auto min-h-screen flex justify-center items-center'>
            <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-violet-400 dark:border-violet-600"></div>
        </div>
    );
};

export default Loader;