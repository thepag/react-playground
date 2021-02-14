import React, { useContext } from 'react';

import { CellContext } from './CellContext';
import './Cell.css';

interface Props {
  x : number;
  y : number;
}

export default function Cell(props: Props) {
  const { x, y } = props;
  const { cells } = useContext(CellContext);
  const { alive } = cells[y][x];

  return (
    <div className={`cell cell--${alive ? 'alive' : 'dead'}`} />
  );
}
