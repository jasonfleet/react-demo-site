import type { NextPage } from 'next'
import Image from 'next/image'
import { Children, useState } from 'react'


const Slideshow = ({children}: {children: React.ReactNode}) => {
  const childNodes = Children.toArray(children)
  const childNodesLength: number = childNodes.length
  const [index, setIndex] = useState<Number>(0)

  const clickedOn = (i: Number) => {
      setIndex((Number(i) + 1 !== childNodesLength ? Number(i) + 1 : 0))
  }

  let pips = []
  for (let i = 0; i < childNodesLength; i++) {
    pips.push(<div className={'border rounded-full aspect-square w-3' + (index === i ? ' bg-slate-200' : '')} />)
  }

  return <div className='h-full flex flex-col place-content-center'>
    {
      childNodes.map((childNode, i: Number) => {
        return (
          <div
            className={'place-self-center' + (index === i ? ' visible' : ' hidden')}
            key={'slide-show-' + i}
            onClick={() => clickedOn(i)}
          >
            {childNode}
          </div>
        )
      })
    }
    <div className='flex flex-row gap-x-2 justify-center pt-2'>
      {pips}
    </div>
  </div>
}

export default Slideshow
