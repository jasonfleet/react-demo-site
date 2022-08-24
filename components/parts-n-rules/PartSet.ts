import DNode from "./DNode"
import Edge from "./Edge"
import Part from "./Part"

type PartSetType = '' | 'aging' | 'cycle'

class PartSet extends DNode {
  edgeIn: Edge | null = null
  egdeOut: Edge | null = null
  label: string = ''
  part: Part | null = null
  max: Number = 0
  min: Number = 0
  style: string = ''
  type: PartSetType = ''
}

export default PartSet
