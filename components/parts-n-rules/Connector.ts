import DNode from "./DNode"
import Edge from "./Edge"

class Connector extends DNode {
  edgesIn: Array<Edge> = []
  edgesOut: Array<Edge> = []
  style: string = ''
}

export default Connector
