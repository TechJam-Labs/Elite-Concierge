import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center py-2">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
