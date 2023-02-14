// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ExampleData } from '../../../model/model-example-data';

let data: ExampleData[] = [
  {
    id: 1,
    text: 'Example data 1'
  }
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExampleData | ExampleData[]>
) {
  if (req.method === 'POST') {
    data = [
      ...data,
      {
        id: Math.max(...data.map((el) => el.id)) + 1,
        text: req.body.text
      }
    ];
  }

  if (req.method === 'PUT') {
    data = data.map((el) => {
      if (el.id === req.body.id) {
        return req.body;
      }

      return el;
    });
  }

  if (req.method === 'DELETE') {
    data = data.filter((el) => {
      return el.id !== req.body.id;
    });
  }

  res.status(200).json(data);
}
