import React from "react";

export default function Legend({ legendItems }) {
  return (
    <div className="d-flex align-items-stretch">
      {legendItems.map((item, index) => (
        <div
          className="d-flex align-items-center justify-content-center"
          key={index}
          style={{
            backgroundColor: item.color,
            flex: 1,
            color: item.textColor,
            fontSize: "1.3em",
          }}
        >
          <span> {item.title} </span>
        </div>
      ))}
    </div>
  );
}
