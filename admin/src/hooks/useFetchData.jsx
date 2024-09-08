import React, { useState, useEffect } from "react";

export default function useFetchData(url, options = null) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const resData = await response.json();
        setData(resData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    data,
    setData,
    error,
    loading,
  };
}
