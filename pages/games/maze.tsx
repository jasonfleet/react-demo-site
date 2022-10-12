import Layout from '../../components/layout'
import Generator from '../../components/maze/generator'

const Maze = () => {

  return <Layout>
    <div className='title'>Maze</div>
    <div className='mt-12 mx-auto w-fit'>
      <Generator />
    </div>
  </Layout>
}

export default Maze
