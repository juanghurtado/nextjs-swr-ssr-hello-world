import useSWR from "swr";
import { ExampleData } from "../model/model-example-data";
import { fetcher } from "../utils/fetcher";
import { UseExampleData } from "./service-example-data.types";

export const getExampleDataKey = '/api/data';

export const getExampleData = async (): Promise<ExampleData[]> => fetcher('http://localhost:3000/data.json')

export const useExampleData: UseExampleData = () => {
    const { data, error, isLoading } = useSWR(getExampleDataKey, getExampleData);

    return {
        data,
        error,
        isLoading
    }
}