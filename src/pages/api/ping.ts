import { NextApiRequest, NextApiResponse } from 'next'
import {conn} from '../../utils/database'

type Data = {
  message: string;
  time: string
}

export default async (_: NextApiRequest, res: NextApiResponse) => {

  const response = await conn.query('SELECT NOW()')

  console.log(response)
  
  res.status(200).json({ message: 'pong', time: response.rows[0].now })
}

