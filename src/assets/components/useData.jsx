import { useEffect, useState } from "react";

export function useData(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            return data.results;
          });
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log("damn..");
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
}
