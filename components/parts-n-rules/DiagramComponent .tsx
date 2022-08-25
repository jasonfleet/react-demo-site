import { MouseEvent, MouseEventHandler } from "react"

const DiagramComponent = () => {

  const clickedOn = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  return (
    <div
      className='absolute bg-amber-200 bottom-0 h-full top-0 w-full'
      onClick={(e: MouseEvent<HTMLDivElement>) => clickedOn(e)}
    >
      <button className='bg-slate-400 border button fixed px-2 right-0 rounded-md top-0' type='button'>Close</button>
    </div>
  )
}

export default DiagramComponent
