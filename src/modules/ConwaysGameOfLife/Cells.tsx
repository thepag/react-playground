import React, { useContext, useEffect, useState } from 'react';

import { CellContext } from './CellContext';
import Cell from './Cell';
import './Cells.css';

export default function Cells() {
  const { cells, next, reset, cycle } = useContext(CellContext);

  useEffect(() => {
    const interval = setInterval(() => { next(); }, 1000);
    return () => { clearInterval(interval) }
  });

  return (
    <>
      <div className="cell__board">
        <div>{cycle} <button onClick={() => reset()}>reset</button></div>
        {cells.map((row, y) => {
          return (
            <div className="cell__row">
              {row.map((cell, x) => <Cell x={x} y={y} />)}
            </div>
          )
        })}
      </div>
    </>
  )
}