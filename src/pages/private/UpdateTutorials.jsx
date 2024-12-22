import React, { useState } from "react";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import { useLocation } from "react-router-dom";
import {
  FaDollarSign,
  FaEnvelope,
  FaImage,
  FaLanguage,
  FaStar,
  FaUser,
} from "react-icons/fa";
import Lottie from "lottie-react";
import updatefailed from '../../assets/lottie json file/loginError.json'
import updateSuccess from '../../assets/lottie json file/uploadComplete.json'


// 
const UpdateTutorials = () => {
  // custom axios
  const axiosSecure = UseAxiosSecure();
  //data recived from my tutorials
  const { state } = useLocation();
  // hold form value
  const [formData, setFormData] = useState({
    image: state?.image,
    language: state?.language,
    price: state?.price,
    description: state?.description,
  });
  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // form update
  const handleUpdate = async (e) => {
    e.preventDefault();
    // send data to backend
    try {
      const { data } = await axiosSecure.patch(`/update-tutorials/${state?._id}`, formData);
      if(data.matchedCount === 1 && data.modifiedCount === 1){
        toast.success("Update successful! 🎉 Your changes have been saved. ✅",{
            duration: 3000,
            position: 'top-right',
            style: {
              background: '#4caf50',
              color: '#ececec',
            },
            icon: <Lottie className="w-14 h-14 mx-auto" animationData={updateSuccess} />,
          });
      }
      if(data.matchedCount === 1 && data.modifiedCount === 0){
        toast.success("Update failed! ⚠️ You need to change at least one value before saving. ✏️",{
            duration: 3000,
            position: 'top-right',
            style: {
              background: '#f44336',
              color: '#ececec',
            },
            icon: <Lottie className="w-14 h-14 mx-auto" animationData={updatefailed} loop={true} />,
          });
      }
    } catch (err) {
      toast.error(err.message, "Error happened");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Update Tutorial Form
      </h2>
      <form onSubmit={handleUpdate}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1 relative">
            <input
              readOnly
              type="text"
              defaultValue={state?.name}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            <FaUser className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1 relative">
            <input
              readOnly
              defaultValue={state?.email}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
            <FaImage className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="language"
            className="block text-sm font-medium text-gray-700"
          >
            Language
          </label>
          <div className="mt-1 relative">
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="chinese">Chinese</option>
              <option value="japanese">Japanese</option>
              {/* Add more language options as needed */}
            </select>
            <FaLanguage className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Price Field */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="mt-1 relative">
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
            <FaDollarSign className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter description"
          />
        </div>

        {/* Review Field */}
        <div className="mb-4">
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-700"
          >
            Review
          </label>
          <div className="mt-1 relative">
            <input
             readOnly
              type="number"
              defaultValue={state?.review}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter review score"
              min="0"
              max="5"
            />
            <FaStar className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTutorials;
