export interface Cell {
  x: number;
  y: number;
  alive: boolean;
  neighbours: Cell[];
}
