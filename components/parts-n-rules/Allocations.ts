import Node from "./Node";


class Allocations extends Node {
  label: string = ''
  partSets: Map<string, object> | null = null
  style: string = ''
  graph: Object = {}

  connect(node1: Node, node2: Node) {
    // if ()
  }

}

export default Allocations
