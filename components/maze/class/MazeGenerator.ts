
export enum Directions {
  UP,
  RIGHT,
  DOWN,
  LEFT
}

export type Cell = {
  [Directions.UP]: number,
  [Directions.RIGHT]: number,
  [Directions.DOWN]: number,
  [Directions.LEFT]: number,
  visitCount: number,
  visited: boolean,
}

const cellOffsets = {
  [Directions.UP]: { row: -1, col: 0 },
  [Directions.RIGHT]: { row: 0, col: +1 },
  [Directions.DOWN]: { row: +1, col: 0 },
  [Directions.LEFT]: { row: 0, col: -1 },
}

class MazeGenerator {
  colOffset: number = 0
  edgeCount: number = 0
  edges: Array<boolean> = []
  height: number = 8
  width: number = 8
  rows: Array<Array<Cell>> = []

  constructor() {
  }

  public setHeightWidth(height: number, width: number) {
    this.height = height
    this.width = width


    this.edgeCount = (this.width * (this.height + 1)) + ((this.width + 1) * this.height)
    this.edges = Array(this.edgeCount)
    this.edges.fill(true)

    this.rows = []

    this.colOffset = (this.width * (this.height + 1))
  }

  public generate(height: number, width: number): Array<Array<Cell>> {

    this.setHeightWidth(height, width)

    for (let r = 0, rowCount: number = this.height; r < rowCount; r++) {
      let row: Array<Cell> = []
      for (let c = 0, colCount: number = this.width; c < colCount; c++) {
        row.push({
          [Directions.UP]: c + (r * this.width),
          [Directions.RIGHT]: c + (r * (this.width + 1)) + this.colOffset + 1,
          [Directions.DOWN]: c + ((r + 1) * this.width),
          [Directions.LEFT]: c + (r * (this.width + 1)) + this.colOffset,
          visited: false,
          visitCount: 0,
        })
      }

      this.rows.push(row)
    }

    let cellRow = 0
    let cellCol = 0

    let cos: Array<Directions>

    let stack: Array<{ row: number, col: number }> = []
    let cell: Cell

    do {
      let last = null
      cos = []
      cell = this.rows[cellRow][cellCol]
      cell.visited = true

      while (cos.length === 0 && last !== undefined) {
        cell = this.rows[cellRow][cellCol]
        cell.visitCount += 1

        if (cellRow > 0 && !this.rows[cellRow + cellOffsets[Directions.UP].row][cellCol].visited) {
          cos.push(Directions.UP)
        }
        if (cellCol < this.width - 1 && !this.rows[cellRow][cellCol + cellOffsets[Directions.RIGHT].col].visited) {
          cos.push(Directions.RIGHT)
        }
        if (cellRow < this.height - 1 && !this.rows[cellRow + cellOffsets[Directions.DOWN].row][cellCol].visited) {
          cos.push(Directions.DOWN)
        }
        if (cellCol > 0 && !this.rows[cellRow][cellCol + cellOffsets[Directions.LEFT].col].visited) {
          cos.push(Directions.LEFT)
        }


        if (cos.length === 0) {
          last = stack.pop()

          if (last !== undefined) {
            cellCol = last.col
            cellRow = last.row
          }
        }
      }

      if (cos.length > 0) {
        let p: Directions = Math.floor(Math.random() * cos.length)
        let co = cellOffsets[cos[p]]

        switch (Directions[cos[p]]) {
          case 'UP':
            this.edges[cell[Directions.UP]] = false
            break
          case 'RIGHT':
            this.edges[cell[Directions.RIGHT]] = false
            break
          case 'DOWN':
            this.edges[cell[Directions.DOWN]] = false
            break
          case 'LEFT':
            this.edges[cell[Directions.LEFT]] = false
            break
        }

        stack.push({ row: cellRow, col: cellCol })

        cellCol += co.col
        cellRow += co.row
      }
    } while (cos.length > 0)

    return this.rows
  }
}

export default MazeGenerator
