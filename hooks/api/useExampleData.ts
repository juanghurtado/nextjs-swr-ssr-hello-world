import { ServiceExampleData } from "../../services/service-example-data";
import { useAPIData } from "./common/useApiData";
import { useAPIMutation } from "./common/useApiMutation";

export const getExampleDataKey = '/api/example-data';

export const useExampleData = () => {
    return useAPIData(getExampleDataKey, ServiceExampleData.getAll);
}

export const useAddExampleData = () => {
    return useAPIMutation(getExampleDataKey, ServiceExampleData.add);
}

export const useUpdateExampleData = () => {
    return useAPIMutation(getExampleDataKey, ServiceExampleData.update);
}