import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

export default function Error({ errorMsg, status }) {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h2>{status}</h2>
      <p>{errorMsg}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}
