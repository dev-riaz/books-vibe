import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
       
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">404</h1>

      
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </h2>

       
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
