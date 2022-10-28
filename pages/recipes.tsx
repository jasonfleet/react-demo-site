import Layout from '../components/layout'
import Feed from '../components/feed/feed'

interface Values {
  contact: string,
  message: string,
}

const Recipes = () => {

  return <Layout>
    <div className='recipes'><Feed /></div>
  </Layout>
}

export default Recipes
