import React from "react";
import { CaretRight } from "phosphor-react";
import "./ItemPath.css";

export default function ItemPath({ item }) {
  return (
    <div className="itemPath">
      <h4>MAIN</h4>
      <CaretRight size={20} />
      <h4>HOME</h4>
      <CaretRight size={20} />
      <h4>{item.category.toUpperCase()}</h4>
      <CaretRight size={20} />
      <h4>{item.name}</h4>
    </div>
  );
}
