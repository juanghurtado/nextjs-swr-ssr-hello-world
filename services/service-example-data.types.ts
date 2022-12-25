import { ExampleData } from "../model/model-example-data";

type UseExampleDataReturn = {
    data?: ExampleData[];
    error?: any;
    isLoading: boolean;
};

export type UseExampleData = () => UseExampleDataReturn;