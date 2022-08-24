import { ChangeEvent, FormEvent, useState } from 'react'

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setQuery(query)
  }

  const queryMeal = (e: FormEvent) => {
    e.preventDefault()
    fetchMeal()
    console.log(query)
  }

  return <div>
    <form onSubmit={(e:FormEvent) => queryMeal(e) }>
      <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e) } value={query} type='text' />
      <input type="submit" value="Submit" />
    </form>
    {meal && <div>{meal[0].title}</div>}
  </div>

}

export default Meal
