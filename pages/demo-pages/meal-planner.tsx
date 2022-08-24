import Layout from '../../components/layout'
import Meal from '../../components/meal-planner/meal'

const MealPlanner = () => {

  return <Layout classStyle='food-orders'>
    <div className='title'>Meal Planner</div>
    <Meal />
  </Layout>
}

export default MealPlanner
