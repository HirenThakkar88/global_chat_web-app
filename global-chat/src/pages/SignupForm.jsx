/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/SignupForm", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        alert("Signup successful!");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col-reverse items-center justify-between min-h-screen p-4 bg-black font-noto-sans md:flex-row md:p-8">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Roll the Carpet<span className="text-blue-500">.!</span>
        </h1>
        <button className="px-6 py-3 mt-4 text-sm text-black transition bg-white rounded-full shadow-md md:text-base hover:bg-gray-200">
          Skip the lag?
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-sm p-6 border border-white rounded-lg shadow-lg sm:max-w-md md:w-1/2 lg:w-1/3 bg-gradient-to-br from-gray-900 to-black sm:p-8">
        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">Signup</h2>
        <p className="mb-6 text-sm text-gray-400 sm:text-base">Just some details to get you in.!</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email / Phone"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-sm text-white transition rounded-md shadow-lg md:text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
          >
            Signup
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

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-400 sm:text-base">
          Already Registered?{" "}
          <a href="/" className="text-blue-500 underline">
            Login
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

export default SignupForm;
