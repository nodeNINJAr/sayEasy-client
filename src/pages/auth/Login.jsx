import React from "react";
import UseAuth from "../../components/hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  // auth context
  const { signInUsingEmailpass, signInWithGoogle } = UseAuth();
  // 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  //
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const userEmail = form.email.value;
    const password = form.password.value;
    //  signIn/login with email pass
    signInUsingEmailpass(userEmail, password)
      .then(() => {
        toast.success(
          "🎉 Welcome back! You’ve successfully logged in. Let’s dive in and get started!"
        );
        navigate(from, {replace:true})
      })
      .catch((err) => {
        toast.error(
          "❌ Login failed! Please check your email and password and try again."
        );
        console.log(err.message);
      });
  };

  //   login with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success(
          "✅ You’ve signed in with Google successfully. Welcome to your account!"
        );
        navigate(from, {replace:true})
      })
      .catch((err) => {
        toast.error(
          "⚠️ Google sign-in failed. Please try again or check your internet connection."
        );
        console.log(err.message);
      });
  };
  //
  return (
    <div className="py-10 md:py-20">
       <Helmet>
        <title>Login || sayEasy</title>
      </Helmet>
      <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 py-14">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-400 dark:text-gray-600 ">
          Dont have account?
          <Link
            to="/signUp"
            rel="noopener noreferrer"
            className="ml-2 focus:underline hover:underline"
          >
            SignUp here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleSignIn}
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
          {/*  */}
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400 dark:text-gray-600" />
          <p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
          <hr className="w-full text-gray-400 dark:text-gray-600" />
        </div>
        {/* form */}
        <form onSubmit={handleSignIn} className="space-y-8">
          <div className="space-y-4">
            {/* name */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
              />
            </div>
            {/* email */}
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
