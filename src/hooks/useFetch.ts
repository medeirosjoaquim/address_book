import {useState, useEffect} from 'react';

// adapted from https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook
export const useFetch = (url: string, options: RequestInit) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return {response, error, isLoading};
};
