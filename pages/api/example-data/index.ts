// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ExampleData } from '../../../model/model-example-data';

let data: ExampleData[] = [{
  id: 1,
  text: "Example data 1"
}];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExampleData | ExampleData[]>
) {
  if (req.method === 'POST') {
    data = [...data, req.body];
  }

  if (req.method === 'PUT') {
    data = data.map((el) => {
      if (el.id === req.body.id) {
        return req.body;
      }

      return el;
    });
  }

  res.status(200).json(data)
}
