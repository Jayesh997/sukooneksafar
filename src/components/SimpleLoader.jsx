// components/SimpleLoader.jsx
import React from "react";

const SimpleLoader = ({
  size = 40,
  color = "#C9A96E", // gold color
  className = "",
  text = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className="animate-spin rounded-full border-4 border-t-transparent"
        style={{
          width: size,
          height: size,
          borderColor: color,
          borderTopColor: "transparent",
        }}
      />
      {text && <p className="mt-2 text-gray-600 text-sm">{text}</p>}
    </div>
  );
};

export default SimpleLoader;
