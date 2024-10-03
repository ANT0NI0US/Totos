import { useEffect, useState, useCallback } from "react";
import { axios } from "../service/axios";
const key = import.meta.env.VITE_API_KEY;

export default function useGetDataFromApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({});

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { page } = params;
      const pageQuery = page ? `&page=${page}` : "";
      const res = await axios.get(`${url}?api_key=${key}${pageQuery}`);

      if (res.status !== 200) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      setData(res?.data);
    } catch (err) {
      setError(`Fetch error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }, [url, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateParams = (newParams) => {
    setParams(newParams);
  };

  return { data, isLoading, error, updateParams };
}
