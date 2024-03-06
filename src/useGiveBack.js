import { useEffect, useState } from "react";

import axios from "axios";

const useGiveBack = (url, newUser) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const giveBackData = async () => {
      console.log(["url"], url);
      console.log(["newUser"], newUser);

      try {
        const response = await axios.post(url, newUser);
        console.log(["response"], response);

        setUser(response.data);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        setError(error);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    giveBackData();
  }, [url, newUser]);

  return { user, isLoading, error };
};

export default useGiveBack;
