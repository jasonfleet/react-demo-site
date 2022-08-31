import { Component, CSSProperties, ReactElement, useState } from "react"
import NodeView, { NodeViewProps } from "./NodeView"

interface PartViewProps extends NodeViewProps { }

class ConnectorView extends NodeView  {

  constructor(props: PartViewProps) {
    super(props)
  }

  render() {
    let styles: CSSProperties = {
      color: 'black',
      left: `${this.position.x}px`,
      position: 'fixed',
      top: `${this.position.y}px`,
    }

    return <div key={this.id} style={styles}>
      {this.label}
    </div>
  }
}

export default ConnectorView
