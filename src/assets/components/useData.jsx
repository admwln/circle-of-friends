import { useEffect, useState } from "react";

export function useData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            return data;
          });
        setData(response);
      } catch (error) {
        console.log("damn..");
      }
    };
    fetchData();
    setLoading(false);
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data };
}
