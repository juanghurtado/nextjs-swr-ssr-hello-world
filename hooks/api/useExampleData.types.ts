import { ExampleData } from '../../model/model-example-data';
import { UseAPIMutationTrigger } from './common/useApiMutation.types';

type UseExampleDataReturn = {
  exampleData?: ExampleData[];
  isLoading: boolean;
  error: Error;
};

type UseAddExampleDataReturn = {
  addExampleData: UseAPIMutationTrigger<
    Pick<ExampleData, 'text'>,
    ExampleData,
    Error
  >;
};

type UseUpdateExampleDataReturn = {
  updateExampleData: UseAPIMutationTrigger<ExampleData, ExampleData, Error>;
};

type UseDeleteExampleDataReturn = {
  deleteExampleData: UseAPIMutationTrigger<ExampleData, void, Error>;
};

export type UseExampleData = () => UseExampleDataReturn;
export type UseAddExampleData = () => UseAddExampleDataReturn;
export type UseUpdateExampleData = () => UseUpdateExampleDataReturn;
export type UseDeleteExampleData = () => UseDeleteExampleDataReturn;
