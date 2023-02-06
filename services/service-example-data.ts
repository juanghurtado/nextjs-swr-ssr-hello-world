import useSWR from "swr";
import useSWRMutation from 'swr/mutation';
import { ExampleData } from "../model/model-example-data";
import { UseAddExampleData, UseEditExampleData, UseExampleData } from "./service-example-data.types";

export const getExampleDataKey = '/api/example-data';

export const getExampleData = async (): Promise<ExampleData[]> => fetch('http://localhost:3000/api/example-data').then(r => r.json())

export const addExampleData = async (exampleData: ExampleData): Promise<ExampleData> => fetch('http://localhost:3000/api/example-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exampleData),
  }).then(r => r.json());

export const updateExampleData = async (exampleData: ExampleData): Promise<ExampleData> => fetch(`http://localhost:3000/api/example-data`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exampleData),
  }).then(r => r.json());
  

export const useExampleData: UseExampleData = () => {
    const { data, error, isLoading } = useSWR(getExampleDataKey, getExampleData);

    return {
        data,
        error,
        isLoading
    }
}

export const useAddExampleData: UseAddExampleData = () => {
    const { trigger } = useSWRMutation(getExampleDataKey, async (_, { arg }) => addExampleData(arg));

    return {
        trigger
    }
}

export const useEditExampleData: UseEditExampleData = () => {
    const { trigger } = useSWRMutation(getExampleDataKey, async (_, { arg }) => updateExampleData(arg));

    return {
        trigger
    }
}