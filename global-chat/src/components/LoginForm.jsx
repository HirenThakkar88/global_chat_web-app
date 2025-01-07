// eslint-disable-next-line no-unused-vars
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col-reverse items-center justify-between min-h-screen p-4 bg-black font-noto-sans md:flex-row md:p-8">

      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Welcome Back<span className="text-purple-400">.!</span>
        </h1>
        <button className="px-6 py-3 mt-4 text-sm text-black transition bg-white rounded-full shadow-md md:text-base hover:bg-gray-200">
          Skip the lag?
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-sm p-6 border border-white rounded-lg shadow-lg sm:max-w-md md:w-1/2 lg:w-1/3 bg-gradient-to-br from-gray-900 to-black sm:p-8">
        {/* Gradient Circle */}
        <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-purple-600 to-blue-800 blur-3xl top-[-30px] right-[-40px]"></div>

        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
          Login
        </h2>
        <p className="mb-6 text-sm text-gray-400 sm:text-base">
          Glad you are back.!
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-400">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="/ForgotPassword" className="text-sm text-blue-500 underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-sm text-white transition rounded-md shadow-lg md:text-base bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <span className="flex-grow h-px bg-gray-700"></span>
          <p className="px-4 text-sm text-gray-400 sm:text-base">Or</p>
          <span className="flex-grow h-px bg-gray-700"></span>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm transition bg-gray-800 rounded shadow md:text-base hover:bg-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-white">Google</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm transition bg-gray-800 rounded shadow md:text-base hover:bg-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook Logo"
              className="w-5 h-5"
            />
            <span className="text-white">Facebook</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm transition bg-gray-800 rounded shadow md:text-base hover:bg-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub Logo"
              className="w-5 h-5"
            />
            <span className="text-white">GitHub</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-4 text-sm text-center text-gray-400 sm:text-base">
          Do not have an account?{" "}
          <a href="/SignupForm" className="text-blue-500 underline">
            Signup
          </a>
        </p>

        {/* Footer Links */}
        <div className="flex justify-between mt-6 text-xs text-gray-400 sm:text-sm">
          <a href="#" className="transition hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="transition hover:text-white">
            Support
          </a>
          <a href="#" className="transition hover:text-white">
            Customer Care
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
