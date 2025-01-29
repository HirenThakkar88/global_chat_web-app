import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="flex flex-col-reverse items-center justify-between min-h-screen p-4 bg-black font-noto-sans md:flex-row md:p-8">
      <div className="text-center md:text-left md:w-1/2 lg:w-1/3">
        <MessageSquare className="size-6 text-primary" />
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Roll the Carpet<span className="text-blue-500">.!</span>
        </h1>
        <button className="px-6 py-3 mt-4 text-sm text-black transition bg-white rounded-full shadow-md md:text-base hover:bg-gray-200">
          Skip the lag?
        </button>
      </div>

      <div className="relative w-full max-w-sm p-6 border border-white rounded-lg shadow-lg sm:max-w-md md:w-1/2 lg:w-1/3 bg-gradient-to-br from-gray-900 to-black sm:p-8">
        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
          Signup
        </h2>
        <p className="mb-6 text-sm text-gray-400 sm:text-base">
          Just some details to get you in.!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
           
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
        
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
             
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute inset-y-0 flex items-center right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="text-gray-400 size-5" />
              ) : (
                <Eye className="text-gray-400 size-5" />
              )}
            </button>
          </div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none md:text-base focus:ring-2 focus:ring-blue-500"
           
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <button
            type="submit"
            className="w-full py-3 text-sm text-white transition rounded-md shadow-lg md:text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              "Signup"
            )}
          </button>
        </form>

        <div className="flex items-center my-6">
          <span className="flex-grow h-px bg-gray-700"></span>
          <p className="px-4 text-sm text-gray-400 sm:text-base">Or</p>
          <span className="flex-grow h-px bg-gray-700"></span>
        </div>

        <div className="flex justify-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm transition bg-gray-800 rounded shadow md:text-base hover:bg-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-white">Google</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm transition bg-gray-800 rounded shadow md:text-base hover:bg-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span className="text-white">Facebook</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm transition bg-gray-800 rounded shadow md:text-base hover:bg-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
              className="w-5 h-5"
            />
            <span className="text-white">GitHub</span>
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-400 sm:text-base">
          Already Registered?{" "}
          <Link to="/LoginForm" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
