import { memo, useState } from "react"
import CategoriesSWR, { QuizCategories } from './categories-swr'

interface CategoriesProps {
  onChange: Function,
  disabled: boolean,
}

const Categories = ({ onChange, disabled }: CategoriesProps) => {
  const categories: QuizCategories = CategoriesSWR()

  return <div>
    <h2>Categories</h2>
    <ul className='quiz-categories'>
      {categories && categories.categories && Object.keys(categories.categories).map(category => {
        return <li key={category}>
            <button className='quiz-button' disabled={disabled}>{category}</button>
        </li>
      })}
      {categories && categories.isError && console.log()}
      {categories && categories.isLoading && <div>isLoading</div>}
    </ul>
  </div>
}

export default memo(Categories)
