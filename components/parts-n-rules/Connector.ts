import Node from "./Node"
import Edge from "./Edge"

class Connector extends Node {
  edgesIn: Array<Edge> = []
  edgesOut: Array<Edge> = []
  style: string = ''
}

export default Connector
