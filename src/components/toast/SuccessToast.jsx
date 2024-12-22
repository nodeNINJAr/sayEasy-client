import React from "react";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';
const SuccessToast = ({toastId}) => {
  return (
    <div>
      <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 divide-gray-700 dark:divide-gray-300">
        <div className="flex flex-1 flex-col p-4 border-l-8 border-violet-400 dark:border-violet-600">
          <span className="text-2xl">Success</span>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            Vitae nulla eligendi dignissimos culpa doloribus.
          </span>
        </div>
        <button onClick={() => toast.dismiss(toastId)} className="px-4 flex items-center text-xs uppercase tracking-wide text-gray-400 dark:text-gray-600 border-gray-700 dark:border-gray-300">
          Dismiss
        </button>
      </div>
    </div>
  );
};
SuccessToast.propTypes = {
    toastId:PropTypes.func.isRequired
};
export default SuccessToast;


