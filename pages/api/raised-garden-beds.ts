
import { NextApiRequest, NextApiResponse } from "next"
import { Redis } from '@upstash/redis'
//  = require("@upstash/redis");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const response = await fetch(`https://vegan-sweet-foods.blogspot.com/feeds/posts/default`);

  // const feed = await parser.parseURL(`https://vegan-sweet-foods.blogspot.com/feeds/posts/default`)

  // return res.status(200).json({ content: feed })


  // module.exports = async (req, res) => {
  /**
   * Redis.fromEnv() will read the following from environment variables:
   * - UPSTASH_REDIS_REST_URL
   * - UPSTASH_REDIS_REST_TOKEN
   */
  const redis = Redis.fromEnv()

  await redis.set("foo", "bar")
  const bar = await redis.get("foo")

  res.json({
    body: `foo: ${bar}`,
  })
}
