import type { NextApiRequest, NextApiResponse } from 'next';
import readContract from '../../services/stacksApi';
import convertDate from '../../utils';

type Data = {
  expDate: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const result = await readContract(req.body.username, req.body.namespace);
  if (result) {
    const blockHeight = result['lease-ending-at'].value.value;
    const expDate = convertDate(blockHeight);
    res.status(200).json({ expDate: expDate.toLocaleString() });
  } else {
    res.status(200).json({ expDate: 'Username does not exist' });
  }
};

export default handler;
