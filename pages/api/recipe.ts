import { NextApiRequest, NextApiResponse } from "next";
import Redis from 'ioredis'

export const recipe: string = "\
# FRUIT CAKE\n\
## Ingredients\n\
- 8oz firm margarine\n\
- 8oz brown sugar\n\
- 8 oz currents\n\
- 4 oz mixed peel\n\
- 2 teaspoons mixed spice\n\
- 4 tablespoons brandy\n\
- 8 oz self raising flour\n\
- 4 oz glace cherries, chopped\n\
- 8 oz sultanas\n\
- 2 oz ground almonds\n\
- rind of half a lemon\n\
- 1 tablespoons molasses\n\
- 4 tablespoons soya milk\n\
\n\n\
## Steps\n\
Soak dried fruit and mixed spice overnight in the brandy.\n\
\n\
Next day -\n\
\n\
1. Cream the margarine and sugar together in a large mixing bowl.\n\
1. Add soya milk alternately with flour and ground almonds.\n\
1. Add dried fruit and molasses and mix well.\n\
1. Spoon into large lined and greased cake tin, cover with greaseproof paper to prevent burning.\n\
1. Bake at 170C for 1.5 to 2 hours.\n\
\n\
Test for readiness by pressing lightly on top of the middle of the cake.it will be firm to the touch if ready, or you can insert a skewer or knife into the cake, if it comes out clean the cake is cooked.\n\
\n\
If you're making the cake some weeks before you're going to eat it it's OK to freeze. A few days before you're gong to eat it put a few holes in the base of the cake and add a few drops of brandy.\n\
"


const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const apiKey: string | undefined = process.env.UPSTASH_API_KEY
  const url: string | undefined = process.env.UPSTASH_REDIS_URL

  // if (url !== undefined) {
  //   // let redis: Redis = new Redis(`redis://:${apiKey}@${url}`)
  //   let redis: Redis = new Redis(`eu1-known-sole-38512.upstash.io/${apiKey}@${url}`)

  //   // redis.

  //   //   res.status(200).json({ count })
  // }

  // return await fetch("https://eu1-known-sole-38512.upstash.io/set/foo/pickle", {
  //   headers: {
  //     Authorization: "Bearer AZZwASQgZjU3ZmZjMzktMjNlMC00ZTkxLWJjYmQtOGNmNzFjNDhlYzE4ZmI3ZGM1MmVlMmZmNDk5NGEzMGQxNWVmZmFmOGFkMWI="
  //   }
  // }).then(response => response.json())
  //   .then(data => data);

  // const response = await fetch("https://eu1-known-sole-38512.upstash.io/get/foo", {
  //   headers: {
  //     Authorization: "Bearer AZZwASQgZjU3ZmZjMzktMjNlMC00ZTkxLWJjYmQtOGNmNzFjNDhlYzE4ZmI3ZGM1MmVlMmZmNDk5NGEzMGQxNWVmZmFmOGFkMWI="
  //   }
  // })

  // return await response.json()

  await fetch("https://eu1-known-sole-38512.upstash.io/set/foo/pickle", {
    headers: {
      Authorization: "Bearer AZZwASQgZjU3ZmZjMzktMjNlMC00ZTkxLWJjYmQtOGNmNzFjNDhlYzE4ZmI3ZGM1MmVlMmZmNDk5NGEzMGQxNWVmZmFmOGFkMWI="
    }
  }).then(response => response.json())
    .then(data => data);
  // response.status(200).json({
  //   body: request.body,
  //   query: request.query,
  //   cookies: request.cookies,
  // });

}


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const APIKey = process.env.UPSTASH_API_KEY
//   const URL = process.env.UPSTASH_REDIS_URL

//   fetch(URL + 'get/foo', {
//     headers: {
//       Authorization: "Bearer " + APIKey
//     }
//   }).then(response => response.json())
//     .then(data => console.log(data));

// }

export default handler
