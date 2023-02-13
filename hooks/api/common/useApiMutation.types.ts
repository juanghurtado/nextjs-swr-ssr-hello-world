type UseAPIMutationReturn<T> = {
    trigger: (args: unknown, opts?: UseAPIMutationOptions<T>) => Promise<T | undefined>;
};

export type UseAPIMutationOptions<T> = {
    onSuccess?: (data: T) => void;
    onError?: (error: any) => void;
};

export type UseAPIMutation = <T>(key: string, promise: (args: any) => Promise<T>) => UseAPIMutationReturn<T>;