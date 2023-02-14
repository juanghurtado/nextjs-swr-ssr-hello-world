import { ExampleData } from '../../model/model-example-data';
import { ServiceExampleData } from '../../services/service-example-data';
import { useAPIData } from './common/useApiData';
import { useAPIMutation } from './common/useApiMutation';
import {
  UseAddExampleData,
  UseDeleteExampleData,
  UseExampleData,
  UseUpdateExampleData
} from './useExampleData.types';

export const getExampleDataKey = '/api/example-data';

export const useExampleData: UseExampleData = () => {
  const { data, isLoading, error } = useAPIData<ExampleData[]>(
    getExampleDataKey,
    ServiceExampleData.getAll
  );

  return {
    exampleData: data,
    isLoading,
    error
  };
};

export const useAddExampleData: UseAddExampleData = () => {
  const { trigger } = useAPIMutation(getExampleDataKey, ServiceExampleData.add);

  return {
    addExampleData: trigger
  };
};

export const useUpdateExampleData: UseUpdateExampleData = () => {
  const { trigger } = useAPIMutation(
    getExampleDataKey,
    ServiceExampleData.update
  );

  return {
    updateExampleData: trigger
  };
};

export const useDeleteExampleData: UseDeleteExampleData = () => {
  const { trigger } = useAPIMutation(
    getExampleDataKey,
    ServiceExampleData.remove
  );

  return {
    deleteExampleData: trigger
  };
};
