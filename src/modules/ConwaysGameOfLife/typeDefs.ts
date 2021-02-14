export interface Cell {
  key: string;
  x: number;
  y: number;
  alive: boolean;
  wasAlive: boolean;
  neighbours: Cell[];
}
