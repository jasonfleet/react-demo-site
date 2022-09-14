import { memo, useState } from "react"
import CategoriesSWR, { QuizCategories } from './categories-swr'

interface CategoriesProps {
  disabled: boolean,
  selectedCategories: Array<string>,
  onChange: Function,
}

const Categories = ({ selectedCategories, disabled, onChange }: CategoriesProps) => {
  const quizCategories: QuizCategories = CategoriesSWR()

  const isSelected = (category: string) => {
    return selectedCategories.includes(category)
  }

  const selected = (category: string) => {
    onChange(category)
  }

  return <div>
    <h2>Categories</h2>
    <ul className='quiz-categories'>
      {quizCategories && quizCategories.categories && Object.keys(quizCategories.categories).map(category => {
        return <li key={category} className={isSelected(category) ? 'selected' : ''}>
          <button
            className={'quiz-button'}
            disabled={disabled}
            onClick={() => selected(category)}
          >{category}</button>
        </li>
      })}
      {quizCategories && quizCategories.isError && console.log()}
      {quizCategories && quizCategories.isLoading && <div>isLoading</div>}
    </ul>
  </div>
}

export default memo(Categories)
