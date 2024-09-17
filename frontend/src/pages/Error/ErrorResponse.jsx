import React from "react";
import "./Error.css";

export default function ErrorResponse({ errorMsg }) {
  return (
    <div className="errorResponse">
      <h2>Oh no error</h2>
      <p>{errorMsg}</p>
    </div>
  );
}
