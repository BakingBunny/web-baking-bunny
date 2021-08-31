import { useEffect, useState } from 'react';
import axios from 'axios';

interface ReturnedData<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export const useFetch = <FetchedData,>(
  url: string
): ReturnedData<FetchedData> => {
  const [fetchedData, setFetchedData] = useState<ReturnedData<FetchedData>>({
    loading: true,
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await axios.get(url, { cancelToken: source.token });
        setFetchedData({ data, loading: false, error: undefined });
        // console.log(data); //TODO: delete it later;
      } catch {
        setFetchedData({
          data: undefined,
          loading: false,
          error: 'Something went wrong. Please try it later.',
        });
      }
    };
    fetchData();

    return () => {
      source.cancel();
    };
  }, [url]);

  return fetchedData;
};
