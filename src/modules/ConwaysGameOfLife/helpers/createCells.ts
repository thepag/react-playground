import { v4 as uuidv4 } from 'uuid';
import getNeighbours from './getNeighbours';
import { Cell } from '../typeDefs';

interface Props {
  width: number;
  height: number;
}

export default function createCells(props: Props): [Cell[]] {
  const { width, height } = props;
  const cells: [Cell[]] = [[]];

  for (let y = 0; y < height; y += 1) {
    cells[y] = [];
    for (let x = 0; x < width; x += 1) {
      const alive = Math.random() < 0.5;
      cells[y][x] = {
        key: uuidv4(),
        x,
        y,
        alive,
        wasAlive: alive,
        neighbours: [],
      };
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const neighbours = getNeighbours(cells, { x, y });
      cells[y][x].neighbours = neighbours;
    }
  }

  return cells;
}
