import React from "react";
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import Collection from "../../components/Collection/Collection";
import News from "../../components/News/News";
import Special from "../../components/Special/Special";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Popular />
      <Special />
      <Collection />
      <News />
    </div>
  );
}
