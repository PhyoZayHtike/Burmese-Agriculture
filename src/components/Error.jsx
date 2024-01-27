import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <h1 className="text-4xl text-center text-gray-600 font-bold animate-fadeIn animate-bounce">
        {error}
      </h1>
    </div>
  );
};

export default Error;
