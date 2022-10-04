import { v4 as uuid } from 'uuid'
import { CSSProperties, MouseEvent } from "react"
import React, { Component, ReactElement } from "react"
import Edge from "./Edge"

export interface NodeViewProps {
  label: string,
  x: number,
  y: number,
}

type Dimension = {
  height: number, width: number
}

type Position = {
  x: number, y: number
}

class NodeView extends Component<NodeViewProps> {
  id: string = uuid()
  component: ReactElement | null = null
  dimension: Dimension = { height:120, width:120 }
  label: string = 'label'
  position: Position = { x:0, y:0 }

  constructor(props: NodeViewProps) {
    super(props)

    this.label = props.label
    this.position = { x: props.x, y: props.y }
  }


  clicked(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
  }
}

export default NodeView
