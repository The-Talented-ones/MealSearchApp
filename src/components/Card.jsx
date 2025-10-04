import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="card h-100"
      style={{
        background: "#fff",
        color: "#222",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
