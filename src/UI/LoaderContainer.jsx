import React from "react";

const LoaderContainer = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center bg-gradient-to-b from-blue-400 to-gray-200">
      <span className="loader"></span>
    </div>
  );
};

export default LoaderContainer;
