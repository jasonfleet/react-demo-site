import { CSSProperties, MouseEvent, MouseEventHandler, useState } from "react"
import NodeView from "../classes/NodeView"
import PartView from "./part-view"
import Tools from "./Tools"

const DiagramComponent = () => {
  const [views, setViews] = useState<Array<NodeView>>([])

  const addPart = (part: string) => {
    let view: NodeView | null = null

    console.log(part)

    switch (part) {
      case 'a':
        view = new NodeView()
        view.component = PartView({y: 0})
        break
      case 'b':
        view = new NodeView()
        view.component = PartView({y: 100})
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
    backgroundColor: 'rgb(251 191 36)',
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
      {views.map((view: NodeView, i: number) => view.component)}
    </div>
  </>
}

export default DiagramComponent
