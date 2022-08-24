import DNode from "./DNode";


class AllocationDiagram extends DNode {
  label: string = ''
  partSets: Map<string, object> | null = null
  style: string = ''
  graph: Object = {}

  connect(node1: DNode, node2: DNode) {
    // if ()
  }

}

export default AllocationDiagram
