import Link from "next/link"
import { useState } from "react"

const Info = () => {
  const [open, setOpen] = useState<boolean>(false)

  return <div className='info-popup'>
    <div className='text-right'>
      <button className='quiz-button' onClick={() => setOpen(!open)} type='button'><h2>Info</h2></button>
    </div>
    {open &&
      <div className='border rounded-lg p-2 flex flex-col gap-2' onClick={() => setOpen(false)}>
        <div>
          The questions are from <Link href='https://the-trivia-api.com'><a target='__blank'>THE TRIVIA API</a></Link>
        </div>
        <div>
          <strong>Note:</strong> catagories have not been implemented.
        </div>
        <div className='underline'>
          Click to close
        </div>
      </div>
    }
  </div>
}

export default Info
