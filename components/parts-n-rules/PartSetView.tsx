import { CSSProperties } from "react"
import NodeView, { NodeViewProps } from "./classes/NodeView"

interface PartSetProps extends NodeViewProps { }

class PartSetView extends NodeView {

  constructor(props: PartSetProps) {
    super(props)
  }

  render() {
    let styles: CSSProperties = {
      color: 'black',
      left: `${this.position.x}px`,
      position: 'fixed',
      top: `${this.position.y}px`,
    }

    return <div className='fixed top-0 left 0' key={this.id} style={styles}>
      {this.label}
    </div>
  }
}

export default PartSetView
