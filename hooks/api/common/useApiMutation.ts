import useSWRMutation from "swr/mutation";
import { UseAPIMutation } from "./useApiMutation.types";

export const useAPIMutation: UseAPIMutation = (key, promise) => {
    const { trigger } = useSWRMutation(key, async (_, { arg }) => promise(arg));

    return {
        trigger: (arg: unknown, opts) => {
            return trigger(arg, {
                onSuccess: (data) => {
                    if (opts?.onSuccess) {
                        opts?.onSuccess(data)
                    }
                },

                onError: (error) => {
                    if (opts?.onError) {
                        opts?.onError(error)
                    }
                }
            });
        }            
    }
}