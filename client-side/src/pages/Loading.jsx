import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-primary border-gray-200 rounded-full animate-spin mb-4"></div>
        <p className="text-primary font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;