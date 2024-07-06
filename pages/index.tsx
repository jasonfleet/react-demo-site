import type { NextPage } from 'next'
import Layout from '../components/layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout home>
      <div className='home'>

        <div className='home-top'>
          <p>Built with <a href='https://reactjs.org' target='__blank'>React JS</a>, <a href='https://nextjs.org/' target='__blank'>Next JS</a> and <a href='https://tailwindcss.com/' target='__blank'>Tailwind</a>.</p>
          <p>Hosted on <a href='https://vercel.com/' target='__blank'>Vercel</a>.</p>
        </div>

        <div className='home-demos'>

          <Link href="/demo-pages">
            <div className='home-demos-link'>Pages</div>
          </Link>

          <Link href="/games">
            <div className='home-demos-link'>Games</div>
          </Link>

          <Link href="/tickets">
            <div className='home-demos-link'>Tickets</div>
          </Link>

          <Link href="/parts-and-rules">
            <div className='home-demos-link'>Project - Parts and Rules</div>
          </Link>

          <Link href="/weather-plus">
            <div className='home-demos-link'>Weather Plus</div>
          </Link>

        </div>

        <Link href='https://github.com/jasonfleet/react-demo-site' target='__blank'>

          <div className='home-demos-link'>
            The source code is on github
          </div>

        </Link>

        <Link href="/contact">
          <div className='home-demos-link'>Contact</div>
        </Link>
      </div>

    </Layout>
  );
}

export default Home
