import React from "react";
import "./Collection.css";
import new_collections from "../../assets/new_collections";
import Item from "../Item/Item";
import useFetch from "../../hooks/useFetch";

export default function Collection() {
  const { data, error } = useFetch("http://localhost:3000/getsubcategory/new");

  console.log(data);
  return (
    <div className="collection">
      <h1>New Collection</h1>
      <div className="line"></div>
      <div className="collectionGrid">
        {data.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
