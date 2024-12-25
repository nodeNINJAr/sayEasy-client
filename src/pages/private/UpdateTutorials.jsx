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
import updatefailed from "../../assets/lottie json file/loginError.json";
import updateSuccess from "../../assets/lottie json file/uploadComplete.json";

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
      const { data } = await axiosSecure.patch(
        `/update-tutorials/${state?._id}`,
        formData
      );
      if (data.matchedCount === 1 && data.modifiedCount === 1) {
        toast.success(
          "Update successful! 🎉 Your changes have been saved. ✅",
          {
            duration: 3000,
            position: "top-right",
            style: {
              background: "#4caf50",
              color: "#ececec",
            },
            icon: (
              <Lottie
                className="w-14 h-14 mx-auto"
                animationData={updateSuccess}
              />
            ),
          }
        );
      }
      if (data.matchedCount === 1 && data.modifiedCount === 0) {
        toast.success(
          "Update failed! ⚠️ You need to change at least one value before saving. ✏️",
          {
            duration: 3000,
            position: "top-right",
            style: {
              background: "#f44336",
              color: "#ececec",
            },
            icon: (
              <Lottie
                className="w-14 h-14 mx-auto"
                animationData={updatefailed}
                loop={true}
              />
            ),
          }
        );
      }
    } catch (err) {
      toast.error(err.message, "Error happened");
    }
  };

  return (
    <section className="px-4 dark:text-gray-50 text-gray-900 sm:w-11/12 mx-auto">
      <form
        onSubmit={handleUpdate}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-10 px-6 py-10 rounded-md shadow-sm dark:bg-gray-700 bg-gray-50 font-figtree">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p
              title="Update tutorial"
              className="font-medium uppercase text-4xl font-fira text-gray-400 truncate"
            >
              Update tutorial
            </p>
            <p className="text-sm text-gray-500 font-montserrat py-4">
              🌟 Share your knowledge and inspire learners! 🌍 Become a language
              tutor and help others master new languages. 🗣️ Whether it's
              English, Spanish, Mandarin, or more, your skills can make a
              difference. ✨ Join now and start teaching your way—flexible,
              rewarding, and impactful! 🚀📚
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            {/* Name Field */}
            <div className="mb-4 col-span-full sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium dark:text-gray-50 text-gray-600"
              >
                Name
              </label>
              <div className="mt-1 relative">
                <input
                  readOnly
                  type="text"
                  defaultValue={state?.name}
                  className=" w-full p-2 pl-10 border text-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
                <FaUser className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>
            {/* Email Field */}
            <div className="mb-4 col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-gray-50 text-gray-600"
              >
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  readOnly
                  type="email"
                  defaultValue={state?.email}
                  className="w-full p-2 pl-10 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            {/* Image URL Field */}
            <div className="mb-4 col-span-full sm:col-span-3">
              <label
                htmlFor="image"
                className="block text-sm font-medium dark:text-gray-50 text-gray-600"
              >
                Image URL
              </label>
              <div className="mt-1 relative">
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
                <FaImage className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            {/* Language Dropdown */}
            {state?.language && (
              <div className="mb-4 col-span-full sm:col-span-3">
                <label
                  htmlFor="language"
                  className="block text-sm font-medium dark:text-gray-50 text-gray-600"
                >
                  Language
                </label>

                <div className="mt-1 relative ">
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full p-2 pl-10 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="chinese">Chinese</option>
                    <option value="japanese">Japanese</option>
                    <option value="arabic">Arabic</option>
                    <option value="korean">Korean</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="italian">Italian</option>
                    {/* Add more language options as needed */}
                  </select>
                  <FaLanguage className="absolute left-3 top-3 text-gray-500" />
                </div>
              </div>
            )}
            {/* Price Field */}
            <div className="mb-4 col-span-full sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium dark:text-gray-50 text-gray-600"
              >
                Price
              </label>
              <div className="mt-1 relative ">
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                  min={20}
                  max={1500}
                />
                <FaDollarSign className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            {/* Description Field */}
            <div className="mb-4 col-span-full ">
              <label
                htmlFor="description"
                className="block text-sm font-medium dark:text-gray-50 text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter description"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4 col-span-full sm:col-span-1">
              <button
                type="submit"
                className="font-semibold w-full bg-orange-500 text-white py-2 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateTutorials;
