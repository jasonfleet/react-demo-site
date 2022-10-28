
import { NextApiRequest, NextApiResponse } from "next"
import Parser from 'rss-parser'

const parser: Parser<{}> = new Parser()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const response = await fetch(`https://vegan-sweet-foods.blogspot.com/feeds/posts/default`);

  const feed = await parser.parseURL(`https://vegan-sweet-foods.blogspot.com/feeds/posts/default`)

  return res.status(200).json({ content: feed })
}
