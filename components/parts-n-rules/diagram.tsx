import { CSSProperties, MouseEvent, MouseEventHandler, useState } from "react"
import NodeView from "./NodeView"
import ConnectorView from "./ConnectorView"
import PartView from "./PartView"
import Tools from "./tools"

const DiagramComponent = () => {
  const [views, setViews] = useState<Array<NodeView>>([])

  const addPart = (part: string) => {
    let view: NodeView | null = null

    console.log(part)

    switch (part) {
      case 'a':
        view = new PartView({ label: 'PartView', x: 0, y: 200})
        break
      case 'b':
        view = new ConnectorView({ label: 'ConnectorView', x: 0, y: 100})
        break
      case 'd':
        setViews(views.map((v: NodeView) => { v.position.x += 10; return v }))
        break
      default:
        console.log('no part', part)
    }

    if (view !== null) {
        setViews([ ...views, view]
    )}
  }

  const clickedOn = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  const styles: CSSProperties = {
    backgroundColor: 'rgb(252 211 77)',
    height: '100%',
    left: '0px',
    position: 'absolute',
    top: '0px',
    width: '100%',
  }

  return <>
    <Tools onAddPart={ (part: string) => addPart(part) } />
    <div
      style={styles}
      onClick={(e: MouseEvent<HTMLDivElement>) => clickedOn(e)}
    >
      {views.map((view: NodeView, i: number) => view.render())}
    </div>
  </>
}

export default DiagramComponent
