import React from "react";

function Button({ label, className }) {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundColor: "#262524",
        color: "white",
        borderRadius: "0.6rem",
        border: "2px solid #CC9933",
        fontWeight: 500,
        fontFamily: "outfit",
        padding: "0.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
}

export default Button;
