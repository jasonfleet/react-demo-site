import { MouseEvent, MouseEventHandler, useState } from 'react';
import Layout from '../components/layout'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

interface Values {
  contact: string,
  message: string,
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return <Layout>
    <div className='title'>Contact</div>
    <div className='grid justify-center'>
      <form className='contact-form'>
        <div className='grid justify-center gap-4'>

          <div className='text-slate-100 text-center p-2'>
            (not a functioning component)
          </div>

          <div className='contact-block'>
            <div>
              <input
                id='contact'
                name='contact'
                placeholder='contact (optional)'
                type='text'
              />
            </div>
          </div>



          <div>
            <div className='contact-block'>
              <textarea
                id='message'
                className='form-textarea w-full'
                name='message'
                placeholder='message'
                required
              />
            </div>

            <div className='contact-block'>
              <button
                className='bg-white px-2 py-1 rounded border'
                disabled={isSubmitting}
                onClick={(e: MouseEvent<HTMLButtonElement>) => submit(e)}
                type='submit'
              >
                Submit
              </button>

            </div>

            <div className='text-slate-100 text-center p-2'>
              (not a functioning component)
            </div>
          </div>
        </div>
      </form>
    </div>

  </Layout>
}

export default Contact
