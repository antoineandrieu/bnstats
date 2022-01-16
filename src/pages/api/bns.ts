import type { NextApiRequest, NextApiResponse } from 'next';
import readContract from '../../services/stacksApi';

type Data = {
  expDate: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const result = await readContract();
  res.status(200).json({ expDate: 'a' });
};

export default handler;
