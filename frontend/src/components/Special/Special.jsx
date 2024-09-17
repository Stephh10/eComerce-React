import React from "react";
import "./Special.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Special() {
  const navigate = useNavigate();
  const { data, error } = useFetch(
    "http://localhost:3000/getsubcategory/special"
  );
  return (
    <div className="special">
      <div className="specialLeft">
        <h2>Limited Edition Offer</h2>
        <p>
          Get Exclusive Access to Limited Edition Products. Available for a
          Short Time Only. Shop the Collection Now!
        </p>
        <button onClick={() => navigate(`/item/${data[0]._id}`)}>
          Get it now
        </button>
      </div>
      <div className="specialRight">
        <img src={data[0]?.image} alt="specialOffersImg" />
      </div>
    </div>
  );
}
