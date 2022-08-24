import Head from 'next/head'
import Navigation from '../components/navigation'
import Slideshow from './slideshow'

const name = 'Demo Site'
export const siteTitle = 'Next.js Demo Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Demo Site - ReactJS and NextJS" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      { !home && <Navigation /> }

      <div className=' flex-grow overflow-auto'>
        {children}
      </div>

      <div className='text-center mt-8 mb-4'>
        <a href='mail:jason.fleet@googlemail.com'>jason.fleet@googlemail.com</a>
      </div>
    </>
  )
}
