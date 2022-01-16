import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  expDate: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const expDate = new Date().toLocaleString();
  res.status(200).json({ expDate });
}
