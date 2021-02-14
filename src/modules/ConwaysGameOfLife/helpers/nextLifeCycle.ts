import { Cell } from '../typeDefs';

export default function nextLifeCycle(cells: [Cell[]]) {
  console.log({ label: 'nextLifeCycle' })
  
  for (let y = 0; y < cells.length; y += 1) {
    for (let x = 0; x < cells[y].length; x += 1) {
      const { neighbours } = cells[y][x];
      const aliveNeighbours = neighbours.reduce((acc, neighbour) => neighbour.alive ? acc + 1 : acc, 0)

      if (
        cells[y][x].alive &&
        aliveNeighbours !== 2 &&
        aliveNeighbours !== 3
      ) {
        // Any live cell with two or three live neighbours survives.
        cells[y][x].alive = false;
      } else if (
        !cells[y][x].alive && 
        aliveNeighbours === 3
      ) {
        // Any dead cell with three live neighbours becomes a live cell.
        cells[y][x].alive = true;
      } else {
        // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
        cells[y][x].alive = false;
      }
    }
  }
}
