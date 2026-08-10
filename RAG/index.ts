//@ts-nocheck

import { useState, useEffect } from "react";

const localCache = {};

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(boolean);
  const [error, setError] = useState(null);

  /**
   * using AbortError Class to avoid memory leaks
   */

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setLoading(true);
    if (localCache[url]) {
      setData(localCache[url]);
      setLoading(false);

      return;
    }
    await fetch(url, { signal })
      .then((res) => {
        (res.json(), (localCache[url] = res));
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.error("this is an abort error");
        } else {
          setError(error);
        }
      })
      .finally(setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}


useFetch("http://loacalhost:3000")