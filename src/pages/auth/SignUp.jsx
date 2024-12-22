import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../components/hooks/UseAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  // auth context
  const { signUpUsingEmailPass, userProfileUpdate, signInWithGoogle } = UseAuth();
  //
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    //signUp with email pass
    signUpUsingEmailPass(userEmail, password)
      .then(() => {
        toast.success("🎉 Congratulations! Your account has been successfully created. You can now log in and start exploring. Welcome aboard!")
        // update user name and photo url
        userProfileUpdate({ displayName: userName, photoURL: photoUrl })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error("❌ Signup failed! Please ensure all required fields are filled out correctly and try again.")
        console.log(err.message);
      });
  };

  //   login with google
const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(() => {
      toast.success("✅ You’ve signed in with Google successfully. Welcome to your account!")
      })
      .catch((err) => {
        toast.error("⚠️ Google sign-in failed. Please try again or check your internet connection.")
        console.log(err.message);
      });  
}

  //
  return (
    <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Register to your account
      </h2>
      <p className="text-sm text-center text-gray-400 dark:text-gray-600">
        Have account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Login here
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button onClick={handleGoogleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 dark:border-gray-600 focus:ring-violet-400 focus:dark:ring-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400 dark:text-gray-600" />
        <p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
        <hr className="w-full text-gray-400 dark:text-gray-600" />
      </div>
      {/* form */}
      <form onSubmit={handleSignUp} className="space-y-8">
        <div className="space-y-4">
          {/* name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name here"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
          {/* email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
          {/* photoUrl */}
          <div className="space-y-2">
            <label htmlFor="url" className="block text-sm">
              Photo Url
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Enter Your PhotoUrl"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
          {/* password */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400 dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
