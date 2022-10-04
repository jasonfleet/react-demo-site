import Node from './Node'
import Edge from './Edge'
import Part from './Part'

type PartSetType = '' | 'aging' | 'cycle'

class PartSet extends Node {
  edgeIn: Edge | null = null
  edgeOut: Edge | null = null
  label: string = ''
  part: Part | null = null
  max: Number = 0
  min: Number = 0
  style: string = ''
  type: PartSetType = ''
}

export default PartSet
