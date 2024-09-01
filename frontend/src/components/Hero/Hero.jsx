import React from "react";
import "./Hero.css";
import { ArrowUpRight } from "phosphor-react";
import img1 from "../../assets/hero_image.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h1>Most popular site for clothing!</h1>
        <h4>Special collection only for you</h4>
        <button>
          See More <ArrowUpRight size={25} />
        </button>
      </div>
      <div className="heroRight">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
