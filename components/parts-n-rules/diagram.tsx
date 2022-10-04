import { CSSProperties, MouseEvent, MouseEventHandler, useState } from "react"
import NodeView from "./classes/NodeView"
import ConnectorView from "./ConnectorView"
import PartView from "./PartView"
import Tools from "./tools"
import PartSetView from "./PartSetView"

export enum PartViews {
  Connector,
  Part,
  PartSet,
}

const DiagramComponent = () => {
  const [views, setViews] = useState<Array<NodeView>>([])

  const addPart = (part: PartViews) => {
    let view: NodeView | null = null

    console.log(part)

    switch (part) {
      case PartViews.PartSet:
        view = new PartSetView({ label: 'PartSetView', x: 0, y: 200 })
        break
      case PartViews.Part:
        view = new PartView({ label: 'PartView', x: 0, y: 200 })
        break
      case PartViews.Connector:
        view = new ConnectorView({ label: 'ConnectorView', x: 0, y: 100 })
        break
      default:
        console.log('no part', part)
    }

    if (view !== null) {
      setViews([...views, view]
      )
    }
  }

  const clickedOn = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  const styles: CSSProperties = {
    backgroundColor: 'rgb(255 230 149)',
    height: '100%',
    left: '0px',
    position: 'absolute',
    top: '0px',
    width: '100%',
  }

  return <>
    <Tools onAddPart={(part: PartViews) => addPart(part)} />
    <div
      style={styles}
      onClick={(e: MouseEvent<HTMLDivElement>) => clickedOn(e)}
    >
      {views.map((view: NodeView, i: number) => view.render())}
    </div>
  </>
}

export default DiagramComponent
