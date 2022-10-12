import { CSSProperties, useEffect, useState } from 'react'
import MazeGenerator, { Cell, Directions } from './class/MazeGenerator'

const mazeGenerator = new MazeGenerator()


const Generator = () => {
  const [height, setHeight] = useState<number>(8)
  const [width, setWidth] = useState<number>(8)

  const [maze, setMaze] = useState<Array<Array<Cell>>>([[]])

  useEffect(() => {
    // mazeGenerator.setHeightWidth()

    setMaze(mazeGenerator.generate(height, width))


  }, [width, height])

  let mazeStyle: CSSProperties = {
    border: '1px solid white',
    display: 'grid',
    gridTemplateColumns: 'repeat(' + width + ', 2em)',
    width: width * 2 + 'em'
  }

  console.log(maze)

  return <div style={mazeStyle}>
    {
      maze.map((row: Array<Cell>, r: number) => {
        return row.map((cell: Cell, c: number) => {
          return <div
            className={
              'h-8 w-8' +
              (mazeGenerator.edges[cell[Directions.UP]] ? ' border-t' : '') +
              (mazeGenerator.edges[cell[Directions.RIGHT]] ? ' border-r' : '') +
              (mazeGenerator.edges[cell[Directions.DOWN]] ? ' border-b' : '') +
              (mazeGenerator.edges[cell[Directions.LEFT]] ? ' border-l' : '')
            }
            id={'col-' + r + '-' + c}
            key={'col-' + r + '-' + c}
          >
          </div>
        })
      })
    }
  </div>
}

export default Generator
