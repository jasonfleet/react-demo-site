import { marked } from 'marked'
import handler, { recipe } from '../../pages/api/recipe'
import parse from 'html-react-parser'

const Mark = () => {

  // const data = fetch('api/recipe').then((res: Response) => console.log(res))

  return <div className='recipe'>
    parse(marked.parse(recipe))
  </div>

}

export default Mark
