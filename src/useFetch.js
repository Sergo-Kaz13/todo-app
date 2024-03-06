import { useEffect, useState } from "react";

import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        setError(error);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
