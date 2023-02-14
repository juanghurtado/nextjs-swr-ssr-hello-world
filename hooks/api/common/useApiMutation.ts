import useSWRMutation from 'swr/mutation';
import { UseAPIMutationReturn } from './useApiMutation.types';

export const useAPIMutation = <T, E = Error, ExtraArg = T>(
  key: string,
  promise: (data: ExtraArg) => Promise<T | void>
): UseAPIMutationReturn<ExtraArg, T, E> => {
  const { trigger } = useSWRMutation<T | void | undefined, E, string, ExtraArg>(
    key,
    async (_, { arg }) => promise(arg)
  );

  return {
    trigger: (arg: ExtraArg, opts) => {
      return trigger(arg, {
        onSuccess: (data) => {
          if (opts?.onSuccess) {
            opts?.onSuccess(data);
          }
        },

        onError: (error) => {
          if (opts?.onError) {
            opts?.onError(error);
          }
        }
      });
    }
  };
};
