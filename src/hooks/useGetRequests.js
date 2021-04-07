import { useEffect, useState } from 'react'

export default function useGetRequests(url) {
  const [ data, setData ] = useState()
  const [ error, setError ] = useState()
  const [ loading, setLoading ] = useState( false )

  async function fetchData() {
    setLoading(true);
    setError();
    const payload = await fetch(url)
      .then(res => res.json())
      .catch(err => {
        setError(err);
      });
    setData(payload);
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, [] );

  return {
    fetchData,
    data,
    error,
    loading,
  }
}
