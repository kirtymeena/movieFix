import { useEffect, useState } from "react";

const useFetchUrl = (url) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async (url) => {
    try {
      setIsFetching(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
      setIsFetching(false);
      return;
    } catch (err) {
      setError(err);
      setData([]);
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return [data, error, isFetching];
};

export default useFetchUrl;
