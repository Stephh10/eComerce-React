import React from "react";
import "./News.css";
import { PaperPlaneRight } from "phosphor-react";

export default function News() {
  return (
    <div className="news">
      <h1>Newsletter</h1>
      <h4>Get timely from your favorite products</h4>
      <div className="newsActions">
        <input type="text" placeholder="Enter your email..." />
        <button onClick={() => alert("Coming Soon")}>
          <PaperPlaneRight size={30} />
        </button>
      </div>
    </div>
  );
}
