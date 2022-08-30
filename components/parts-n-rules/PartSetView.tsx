import NodeView, { NodeViewProps } from "./NodeView"
import PartSet from "./PartSet"

interface PartSetProps extends NodeViewProps { }

class PartSetView extends NodeView {


  constructor(props: PartSetProps) {
    super(props)
  }
  render() {
    return <div className='fixed top-0 left 0'>
      {this.label}
    </div>
  }
}

export default PartSetView
