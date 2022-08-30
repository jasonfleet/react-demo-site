import PartSet from "../classes/PartSet"

interface PartSetProps {
  partSet: PartSet,
}

const PartSetView = ({partSet}: PartSetProps) => {

  return <div className='fixed top-0 left 0'>
    {partSet.label}
  </div>
}

export default PartSetView
