import type { NextPage } from 'next'
import Layout from '../components/layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>
      <div className='home'>
        <div className='top'>

          <div className='intro'>
            <p>Hello,</p>
            <p>My name is Jason Fleet, I am a Software Developer.</p>
          </div>
          <div className='intro'>
            <p>This site is built with <a href='https://reactjs.org' target='__blank'>React JS</a>, <a href='https://nextjs.org/' target='__blank'>Next JS</a> and <a href='https://tailwindcss.com/' target='__blank'>Tailwind</a>.</p>
            <p>It is hosted on <a href='https://vercel.com/' target='__blank'>Vercel</a>.</p>
          </div>
        </div>


        <div className='middle'>
          <div className='intro-small'>
            <Link href="/demo-pages">
              <a>Demo Pages</a>
            </Link>
          </div>
          <div className='intro-small'>
            <Link href="/games">
              <a>Games</a>
            </Link>
          </div>
          <div className='intro-small'>
            <Link href="/parts-and-rules">
              <a>Project - Parts and Rules</a>
            </Link>
          </div>
          <div className='intro-small'>
            <Link href="/weather-plus">
              <a>Weather Plus</a>
            </Link>
          </div>
          <div className='intro-small'>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
