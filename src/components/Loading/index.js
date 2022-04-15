import React from "react";

// import { Container } from './styles';

function Loading() {
  return (
    <div className="main-content">
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ flex: 1, height: "100vh" }}
        >
          <div className="spinner-grow text-success" role="status"></div>
          <div className="spinner-grow text-danger" role="status"></div>
          <div className="spinner-grow text-warning" role="status"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
