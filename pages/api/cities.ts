import type { NextApiRequest, NextApiResponse } from 'next'

import citiesData from './gb.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(citiesData)
}
