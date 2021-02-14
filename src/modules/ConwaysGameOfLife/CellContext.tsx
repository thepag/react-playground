import React, { FC, useState } from 'react';

import createCells from './helpers/createCells';
import nextLifeCycle from './helpers/nextLifeCycle';
import { WIDTH, HEIGHT } from './constants';
import { Cell } from './typeDefs';

let cells: [Cell[]] = createCells({ width: WIDTH, height: HEIGHT });

function next() {
  nextLifeCycle(cells);
}

function reset() {
  cells = createCells({ width: WIDTH, height: HEIGHT });
}

export const CellContext = React.createContext({
  cells,
  next,
  reset,
  cycle: 0,
});

export const CellProvider: FC = ({ children }) => {
  const [cycle, setCycle] = useState(0);

  const wrapNext = () => {
    next();
    setCycle(cycle + 1);
  }

  const wrapReset = () => {
    reset();
    setCycle(0);
  }

  return (
    <CellContext.Provider value={{
      cells,
      next: wrapNext,
      reset: wrapReset,
      cycle,
    }}>
      {children}
    </CellContext.Provider>
  );
} 
