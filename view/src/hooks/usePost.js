import { useState, useEffect } from "react";

const usePost = (url, requestData) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); // abort controller for stop fetch

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch " + url);
        }
      })
      .then(() => {
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { isPending, error };
};

export default usePost;
