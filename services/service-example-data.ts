import { ExampleData } from "../model/model-example-data";
import { fetcher } from "../utils/fetcher";

export const getExampleDataKey = '/api/data';

export const getExampleData = async (): Promise<ExampleData[]> => fetcher('http://localhost:3000/data.json')