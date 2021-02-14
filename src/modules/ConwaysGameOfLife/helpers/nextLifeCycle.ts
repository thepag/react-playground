import { Cell } from '../typeDefs';

export default function nextLifeCycle(cells: [Cell[]]) {
  // Store the current generation's state
  for (let y = 0; y < cells.length; y += 1) {
    for (let x = 0; x < cells[y].length; x += 1) {
      cells[y][x].wasAlive = cells[y][x].alive;
    }
  }

  // Calculate the next generation
  for (let y = 0; y < cells.length; y += 1) {
    for (let x = 0; x < cells[y].length; x += 1) {
      const { neighbours } = cells[y][x];
      const aliveNeighbours = neighbours.reduce((acc, neighbour) => neighbour.wasAlive ? acc + 1 : acc, 0);

      if (
        cells[y][x].wasAlive &&
        (aliveNeighbours === 2 || aliveNeighbours === 3)
      ) {
        // Any live cell with two or three live neighbours survives.
        cells[y][x].alive = true;
      } else if (
        !cells[y][x].wasAlive && 
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
