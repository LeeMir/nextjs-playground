// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Array<{
  name: string;
}>;

const handler = (req:NextApiRequest, res:NextApiResponse<Data>) => {
  const data:Data = [
    { name: 'John Doe' },
    { name: 'Lee Mir' },
    { name: 'Kim Sally' },
    { name: 'Kim Ariel' }
  ]
  res.status(200).json(data);
}

export default handler;
