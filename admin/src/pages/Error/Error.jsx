import React from "react";

export default function Error({ error }) {
  return (
    <div className="error">
      <h4>Oh no error</h4>
      <p>{error}</p>
    </div>
  );
}
