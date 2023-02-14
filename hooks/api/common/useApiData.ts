import useSWR from 'swr';
import { UseAPIData } from './useApiData.types';

export const useAPIData: UseAPIData = (key, promise, opts = {}) => {
  const { data, error, isLoading } = useSWR(key, promise, opts);

  return {
    data,
    error,
    isLoading
  };
};
