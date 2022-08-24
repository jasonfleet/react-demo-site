

interface DifficultyProps {
  onChange: Function,
  difficulty: string,
  disabled: boolean,
}

const Difficulty = ({ onChange, difficulty, disabled }: DifficultyProps) => {

  return <div>
    <h2>Difficulty</h2>
    <ul className='quiz-difficulty'>
      <li className='block text-center'>
        {difficulty === 'easy' && <span className='text-xl'>&gt;&gt;</span>}
        <button className='quiz-button' disabled={disabled} onClick={() => onChange('easy') } type='button'>Easy</button>
        {difficulty === 'easy' && <span className='text-xl'>&lt;&lt;</span>}
      </li>
      <li className='block text-center'>
        {difficulty === 'medium' && <span className='text-xl'>&gt;&gt;</span>}
        <button className='quiz-button' disabled={disabled} onClick={() => onChange('medium') } type='button'>Medium</button>
        {difficulty === 'medium' && <span className='text-xl'>&lt;&lt;</span>}
      </li>
      <li className='block text-center'>
        {difficulty === 'hard' && <span className='text-xl'>&gt;&gt;</span>}
        <button className='quiz-button' disabled={disabled} onClick={() => onChange('hard') } type='button'>Hard</button>
        {difficulty === 'hard' && <span className='text-xl'>&lt;&lt;</span>}
      </li>
    </ul>
  </div>
}

export default Difficulty
