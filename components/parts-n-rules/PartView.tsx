import { CSSProperties, MouseEvent } from "react"
import NodeView, { NodeViewProps } from "./classes/NodeView"

interface PartViewProps extends NodeViewProps { }

class PartView extends NodeView {

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

    return <div
      onClick={(e: MouseEvent<HTMLDivElement>) => this.clicked(e)}
      key={this.id} style={styles}>
      {this.label}
    </div>
  }
}

export default PartView
