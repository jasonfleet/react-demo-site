import React, { ReactElement } from "react"
import Edge from "./Edge"

type Dimension = {
  height: number, width: number
}

type Position = {
  x: number, y: number
}

class NodeView {
  id: string = ''
  dimension: Dimension = { height:120, width:120 }
  position: Position = { x:0, y:0 }
  component: ReactElement | null = null
}

export default NodeView
