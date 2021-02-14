import { WIDTH, HEIGHT } from '../constants';
import { Cell } from '../typeDefs';

interface Props {
  x: number;
  y: number;
}

export default function getNeighbours(cells: [Cell[]], { x, y }: Props): Cell[] {
  const neighbours: Cell[] = [];

  if (y > 0 && y < HEIGHT - 1 && x > 0 && x < WIDTH - 1) {
    neighbours.push(cells[y + 1][x - 1]);
    neighbours.push(cells[y + 1][x]);
    neighbours.push(cells[y + 1][x + 1]);
    neighbours.push(cells[y][x - 1]);
    neighbours.push(cells[y][x + 1]);
    neighbours.push(cells[y - 1][x - 1]);
    neighbours.push(cells[y - 1][x]);
    neighbours.push(cells[y - 1][x + 1]);
  } else if (y === 0 && x > 0 && x < WIDTH - 1) {
    neighbours.push(cells[y + 1][x - 1]);
    neighbours.push(cells[y + 1][x]);
    neighbours.push(cells[y + 1][x + 1]);
    neighbours.push(cells[y][x - 1]);
    neighbours.push(cells[y][x + 1]);
    neighbours.push(cells[HEIGHT - 1][x - 1]);
    neighbours.push(cells[HEIGHT - 1][x]);
    neighbours.push(cells[HEIGHT - 1][x + 1]);
  } else if (y === HEIGHT - 1 && x > 0 && x < WIDTH - 1) {
    neighbours.push(cells[0][x - 1]);
    neighbours.push(cells[0][x]);
    neighbours.push(cells[0][x + 1]);
    neighbours.push(cells[y][x - 1]);
    neighbours.push(cells[y][x + 1]);
    neighbours.push(cells[y - 1][x - 1]);
    neighbours.push(cells[y - 1][x]);
    neighbours.push(cells[y - 1][x + 1]);
  } else if (y > 0 && y < HEIGHT - 1 && x === 0) {
    neighbours.push(cells[y + 1][WIDTH - 1]);
    neighbours.push(cells[y + 1][x]);
    neighbours.push(cells[y + 1][x + 1]);
    neighbours.push(cells[y][WIDTH - 1]);
    neighbours.push(cells[y][x + 1]);
    neighbours.push(cells[y - 1][WIDTH - 1]);
    neighbours.push(cells[y - 1][x]);
    neighbours.push(cells[y - 1][x + 1]);
  } else if (y > 0 && y < HEIGHT - 1 && x === WIDTH - 1) {
    neighbours.push(cells[y + 1][x - 1]);
    neighbours.push(cells[y + 1][x]);
    neighbours.push(cells[y + 1][0]);
    neighbours.push(cells[y][x - 1]);
    neighbours.push(cells[y][0]);
    neighbours.push(cells[y - 1][x - 1]);
    neighbours.push(cells[y - 1][x]);
    neighbours.push(cells[y - 1][0]);
  }

  // TODO: Define the 4 corners

  return neighbours;
}
