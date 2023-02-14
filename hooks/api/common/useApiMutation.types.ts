export type UseAPIMutationReturn<ExtraArg, T = ExtraArg, E = Error> = {
  trigger: UseAPIMutationTrigger<ExtraArg, T, E>;
};

export type UseAPIMutationOptions<ExtraArg, E> = {
  onSuccess?: (data?: ExtraArg | void) => void;
  onError?: (error: E) => void;
};

export type UseAPIMutationTrigger<ExtraArg, T, E = Error> = (
  arg: ExtraArg,
  opts?: UseAPIMutationOptions<ExtraArg | T, E>
) => Promise<T | undefined | void>;
