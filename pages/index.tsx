import type { NextPage } from 'next'
import Layout from '../components/layout'
import Link from 'next/link'

const Home: NextPage = () => {
  return <Layout home>
    <div className='home'>

      <div className='home-top'>
        <p>Built with <a href='https://reactjs.org' target='__blank'>React JS</a>, <a href='https://nextjs.org/' target='__blank'>Next JS</a> and <a href='https://tailwindcss.com/' target='__blank'>Tailwind</a>.</p>
        <p>Hosted on <a href='https://vercel.com/' target='__blank'>Vercel</a>.</p>
      </div>

      <div className='home-demos'>

        <Link href="/demo-pages">
          <a><div className='home-demos-link'>Pages</div></a>
        </Link>

        <Link href="/games">
          <a><div className='home-demos-link'>Games</div></a>
        </Link>

        <Link href="/recipes">
          <a><div className='home-demos-link'>Recipes</div></a>
        </Link>

        <Link href="/tickets">
          <a><div className='home-demos-link'>Tickets</div></a>
        </Link>

        <Link href="/parts-and-rules">
          <a><div className='home-demos-link'>Project - Parts and Rules</div></a>
        </Link>

        <Link href="/weather-plus">
          <a><div className='home-demos-link'>Weather Plus</div></a>
        </Link>

      </div>

      <Link href='https://github.com/jasonfleet/react-demo-site'>
        <a target='__blank'>
          <div className='home-demos-link'>
            The source code is on github
          </div>
        </a>
      </Link>

      <Link href="/contact">
        <a><div className='home-demos-link'>Contact</div></a>
      </Link>
    </div>

  </Layout>
}

export default Home
