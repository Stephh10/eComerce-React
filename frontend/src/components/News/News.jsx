import React, { useState } from "react";
import "./News.css";
import { PaperPlaneRight } from "phosphor-react";
import { toast } from "react-toastify";

export default function News() {
  const [inputValue, setInputValue] = useState("");

  function handleEmailSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputValue)) {
      toast.success(
        "Thank you for subscribing. Please check your email for information about our latest products."
      );
      setInputValue("");
    } else {
      toast.error("Please enter valid email");
    }
  }
  return (
    <div className="news">
      <h1>Newsletter</h1>
      <h4>Get timely from your favorite products</h4>
      <div className="newsActions">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Enter your email..."
        />
        <button onClick={handleEmailSubmit}>
          <PaperPlaneRight size={30} />
        </button>
      </div>
    </div>
  );
}
