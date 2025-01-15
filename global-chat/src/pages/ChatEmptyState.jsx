// src/components/ChatEmptyState.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

const ChatEmptyState = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Hamburger Menu */}
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Other Buttons */}
       
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="flex flex-col items-center justify-center w-1/2 border-r border-gray-200">
          <div className="flex flex-col items-center">
            <div className="p-4 mb-4 bg-gray-200 rounded-full">
              <svg
                className="w-12 h-12 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.5 14.5L8 18m7-6.5L14.5 14.5"
                />
              </svg>
            </div>
            <p className="text-gray-500">You currently have no channels</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="flex flex-col items-center">
            <div className="p-4 mb-4 bg-gray-200 rounded-full">
              <svg
                className="w-12 h-12 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8m0 0l-4 4m4-4l-4-4"
                />
              </svg>
            </div>
            <p className="text-gray-500">No chats here yet...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatEmptyState;
