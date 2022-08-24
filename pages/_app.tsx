import '../styles/globals.css'
import type { AppProps } from 'next/app'

function DemoSiteApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default DemoSiteApp
