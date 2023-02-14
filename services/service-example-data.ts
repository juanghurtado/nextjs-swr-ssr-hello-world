import { ExampleData } from '../model/model-example-data';

export const getAll = async (): Promise<ExampleData[]> =>
  fetch('http://localhost:3000/api/example-data').then((r) => r.json());

export const add = async (
  exampleData: Pick<ExampleData, 'text'>
): Promise<ExampleData> =>
  fetch('http://localhost:3000/api/example-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exampleData)
  }).then((r) => r.json());

export const update = async (exampleData: ExampleData): Promise<ExampleData> =>
  fetch(`http://localhost:3000/api/example-data`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exampleData)
  }).then((r) => r.json());

export const remove = async (exampleData: ExampleData): Promise<void> =>
  fetch(`http://localhost:3000/api/example-data`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exampleData)
  }).then((r) => r.json());

export const ServiceExampleData = {
  getAll,
  add,
  update,
  remove
};
