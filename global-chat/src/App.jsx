// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";
const App = () => {

  const { authUser,checkAuth, isCheckingAuth,onlineUsers }= useAuthStore();
  const { theme } = useThemeStore();

  console.log(onlineUsers);

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );


  return (
    
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/LoginForm" />} />
        <Route path="/LoginForm" element={!authUser ?<LoginForm /> : <Navigate to="/" />} />
        <Route path="/SignupForm" element={!authUser ?<SignupForm /> : <Navigate to="/" />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/SettingPage" element={< SettingPage/>} />
        <Route path="/ProfilePage" element={authUser ?< ProfilePage/> : <Navigate to="/LoginForm" />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
