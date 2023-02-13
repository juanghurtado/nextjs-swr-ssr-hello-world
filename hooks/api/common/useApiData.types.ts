type UseAPIDataReturn<T> = {
    data?: T;
    error: any;
    isLoading: boolean;
};

export type UseAPIDataOptions = {
    onSuccess?: () => void;
    onError?: () => void;
};

export type UseAPIData = <T>(key: string, promise: (args: any) => Promise<T>, opts?: UseAPIDataOptions) => UseAPIDataReturn<T>;