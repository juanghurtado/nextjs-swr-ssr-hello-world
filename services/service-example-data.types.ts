import { ExampleData } from "../model/model-example-data";

type UseExampleDataReturn = {
    data?: ExampleData[];
    error?: any;
    isLoading: boolean;
};

type UseAddExampleDataReturn = {
    trigger: (extraData: ExampleData) => void;
}

type UseEditExampleDataReturn = {
    trigger: (extraData: ExampleData) => void;
}

export type UseExampleData = () => UseExampleDataReturn;
export type UseAddExampleData = () => UseAddExampleDataReturn;
export type UseEditExampleData = () => UseEditExampleDataReturn;