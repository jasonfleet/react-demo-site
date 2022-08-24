import { useState } from 'react'

type Recipe = {

  title: string,
  ingredients: string,
  servings: string,
  instructions: string,
}

const Meal = () => {
  const [meal, setMeal] = useState<Array<Recipe> | null>(null)
  const [query, setQuery] = useState<string>('')

  const fetchMeal = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, { headers: {'X-Api-Key': 'eSm0r3hl+5zene41MmLvew==HsJrTZtuCOgx1mPr'}})
    const meal = await res.json()

    setMeal(meal)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  const queryMeal = (e) => {
    e.preventDefault()
    fetchMeal()
    console.log(query)
  }

  return <div>
    <form onSubmit={(e) => queryMeal(e) }>
      <input onChange={e => handleChange(e) } value={query} type='text' />
      <input type="submit" value="Submit" />
    </form>
    {meal && <div>{meal[0].title}</div>}
  </div>

}

export default Meal
