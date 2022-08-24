// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          // href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          // href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          // href="https://fonts.googleapis.com/css2?family=Lemon&family=Press+Start+2P&display=swap"
          // href="https://fonts.googleapis.com/css2?family=Ceviche+One&family=Lemon&family=Press+Start+2P&display=swap"
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
          // href="https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap"
          // href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
