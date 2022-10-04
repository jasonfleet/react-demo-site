import { MouseEvent, useState } from 'react';
import Layout from '../components/layout'
import { Process } from '../components/order-view/Process';

const Slick = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const [file, setFile] = useState(null)

  const process = () => {
    let fileReader = new FileReader

    fileReader.onloadend = () => {
      let process = new Process

      if (fileReader !== null) {
        let result = fileReader.result.toString()
        process.processOrdersCsv(result)
      }

    }

    fileReader.readAsText(file.files[0])

  }

  const submit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return <Layout>
    <div className='title'>Slick Order View</div>
    <div className='grid justify-center'>
      <form className='contact-form'>
        <div className='grid justify-center gap-4'>

          <div>
            <div className='contact-block'>
              <p><label htmlFor='file-upload'>Test Orders File</label></p>
              <input
                id='file-upload'
                name='file-upload'
                type="file"
                accept=".csv"
                ref={(ref) => setFile(ref)}
                onChange={() => { process() }}

              />

              <div className='contact-block'>
                <button
                  className='bg-white px-2 py-1 rounded border'
                  disabled={isSubmitting}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => submit(e)}
                  type='submit'
                >
                  Process
                </button>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>

  </Layout>
}

export default Slick
