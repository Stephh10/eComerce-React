import React from "react";
import "./News.css";
import { PaperPlaneRight } from "phosphor-react";
import { toast } from "react-toastify";

export default function News() {
  return (
    <div className="news">
      <h1>Newsletter</h1>
      <h4>Get timely from your favorite products</h4>
      <div className="newsActions">
        <input type="text" placeholder="Enter your email..." />
        <button
          onClick={() =>
            toast.success(
              "Thank you for subscribing. Please check your email for information about our latest products."
            )
          }
        >
          <PaperPlaneRight size={30} />
        </button>
      </div>
    </div>
  );
}
