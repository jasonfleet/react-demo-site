import useSWR from 'swr'
import Layout from '../components/layout'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Values {
  contact: string,
  message: string,
}

const Recipes = () => {

  const { data, error } = useSWR('/api/raised-garden-beds', fetcher)

  if (error) return <div>Failed to load </div>
  if (!data) return <div>Loading...</div>

  return <Layout>
    <div className='raised-garden-beds'>raised-garden-beds</div>


  </Layout>
}

export default Recipes
