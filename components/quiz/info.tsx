import { useState } from "react"

const Info = () => {
  const [open, setOpen] = useState<boolean>(false)

  return <div className='absolute p-2 top-0 right-0'>
    <div className='text-right'><button onClick={() => setOpen(!open)} type='button'><h2>Info</h2></button></div>
    {open &&
      <div className='border rounded-lg p-2'>
        some info about something
      </div>
    }
  </div>
}

export default Info
