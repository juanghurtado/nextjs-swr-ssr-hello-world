type UseAPIDataReturn<T, E = Error> = {
  data?: T;
  error: E;
  isLoading: boolean;
};

export type UseAPIDataOptions = {
  onSuccess?: () => void;
  onError?: () => void;
};

export type UseAPIData = <T, E = Error>(
  key: string,
  promise: (args: E) => Promise<T>,
  opts?: UseAPIDataOptions
) => UseAPIDataReturn<T, E>;
