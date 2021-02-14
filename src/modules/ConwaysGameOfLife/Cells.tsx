import React, { useContext, useEffect, useState } from 'react';

import { CellContext } from './CellContext';
import Cell from './Cell';
import './Cells.css';

export default function Cells() {
  const { cells, next, reset, cycle } = useContext(CellContext);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => { next(); }, speed);
    return () => { clearInterval(interval) }
  }, [speed, next]);

  return (
    <>
      <div className="cell__board">
        <div>
          Conway's Game of Life | Generation: {cycle} |{' '}
          <input type="range" max={1000} min={10} value={speed} onChange={(event) => {
            setSpeed(event.currentTarget.valueAsNumber)
          }} /> |{' '}
          <button onClick={() => reset()}>reset</button>
        </div>
        {cells.map((row, y) => {
          return (
            <div className="cell__row" key={y}>
              {row.map((cell, x) => <Cell x={x} y={y} key={cell.key} />)}
            </div>
          )
        })}
      </div>
    </>
  )
}