import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const APIKey = process.env.WEATHER_API_KEY
  // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}
}
