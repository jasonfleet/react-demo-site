import { CSSProperties, MouseEvent } from "react"
import NodeView, { NodeViewProps } from "./NodeView"

interface PartViewProps extends NodeViewProps { }

class PartView extends NodeView {

  constructor(props: PartViewProps) {
    super(props)
  }

  clicked(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
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
      key={'part-view-' + this.id} style={styles}>
      {this.label}
    </div>
  }
}

export default PartView
