import Head from 'next/head'
import Navigation from '../components/navigation'
import Slideshow from './slideshow'

const name = 'Demo Site'
export const siteTitle = 'Next.js Demo Website'

export default function Layout({
  children,
  classStyle,
  home
}: {
  children: React.ReactNode
  classStyle: string,
  home?: boolean
}) {
  return (
    <>
      <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Demo Site - ReactJS and NextJS" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      {!home &&
        <Navigation />
      }

      <main className={classStyle}>
        {children}
      </main>

      <footer className='text-center bottom-0 my-12'>
        <a href='mail:jason.fleet@googlemail.com'>jason.fleet@googlemail.com</a>
      </footer>
    </>
  )
}
