import React, { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, (options = null));
      if (!response.ok) {
        setError("Somting went wrong");
      }
      const resData = await response.json();
      setData(resData);
    }
    fetchData();
  }, []);

  console.log(data);
  return {
    data,
  };
}
