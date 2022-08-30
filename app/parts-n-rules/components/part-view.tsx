import { CSSProperties, ReactElement, useState } from "react"
import NodeView from "../classes/NodeView"

interface PartViewProps {
  // nodeView: NodeView,
  y: number,
}

const PartView = ({y}: PartViewProps): ReactElement => {

  const styles: CSSProperties = {
    color: 'black',
    position: 'fixed',
    top: `${y}px`
  }

  return <div key={'part-view-' + y} style={styles}>
    Label
  </div>
}

export default PartView
