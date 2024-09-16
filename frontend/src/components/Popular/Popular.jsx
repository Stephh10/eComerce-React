import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import useFetch from "../../hooks/useFetch";

export default function Popular() {
  const { data, error } = useFetch(
    "http://localhost:3000/getsubcategory/popular"
  );
  return (
    <div className="popular">
      <h1>Our popular products</h1>
      <div className="line"></div>
      <div className="popularGrid">
        {data.slice(0, 4).map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
