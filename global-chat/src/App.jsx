// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
import ChatEmptyState from "./pages/ChatEmptyState";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ChatEmptyState" element={<ChatEmptyState />} />
      </Routes>
    </Router>
  );
};

export default App;
