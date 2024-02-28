import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Attemping to fetch from: ', url)
    fetch(url)
      .then(get => {
        if (get.status === 429) { //Rate limit error
          throw Error('Too many requests, wait before making more requests');
        } else {
          return get.json()
        }
      })
      .then(res => {
        setIsPending(false);
        if (res) {
          setError(null);
          setData(res)
        } else {
          throw Error('Could not fetch data - Manual error')
        }
      }).catch(err => {
        setIsPending(false);
        setError(err.message);
        console.log("Fetch error:", err);
      })
  }, [url])

  return { data, isPending, error };
}

export default useFetch;