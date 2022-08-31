import { PartViews } from "./diagram"

interface ToolsProps {
  onAddPart: Function
}

const Tools = ({onAddPart}: ToolsProps) => {

  return <div className='fixed right-0 rounded-md top-0 z-50'>
    <div className='flex flex-auto'>
      <button className='bg-slate-400 border button px-2' onClick={() => onAddPart(PartViews.PartSet)} type='button'>A</button>
      <button className='bg-slate-400 border button px-2' onClick={() => onAddPart(PartViews.Part)} type='button'>B</button>
      <button className='bg-slate-400 border button px-2' onClick={() => onAddPart(PartViews.Connector)} type='button'>D</button>
      <button className='bg-slate-400 border button px-2' type='button'>Close</button>
    </div>
  </div>
}

export default Tools
