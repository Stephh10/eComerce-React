import React from "react";
import "./Collection.css";
import new_collections from "../../assets/new_collections";
import Item from "../Item/Item";

export default function Collection() {
  return (
    <div className="collection">
      <h1>New Collection</h1>
      <div className="line"></div>
      <div className="collectionGrid">
        {new_collections.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
