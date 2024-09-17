import React, { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const resData = await response.json();
        if (resData.message) {
          throw new Error(resData.message);
        }
        setData(resData);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [url, options]);

  return {
    data,
    error,
  };
}
