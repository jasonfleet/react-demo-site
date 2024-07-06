import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'

//

const DemoPages: NextPage = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 justify-items-stretch mx-2 px-2'>
        <div className='title'>Demo Pages</div>
        <div>
          <Link href="demo-pages/meal-planner">
            Food Orders
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default DemoPages
