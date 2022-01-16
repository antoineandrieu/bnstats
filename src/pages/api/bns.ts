import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  expDate: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const expDate = new Date().toLocaleString();
  res.status(200).json({ expDate });
};

export default handler;
