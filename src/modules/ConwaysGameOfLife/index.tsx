import React from 'react';

import { CellProvider } from './CellContext';
import Cells from './Cells';

export default function ConwaysGameOfLife() {
  return (
    <CellProvider>
      <Cells />
    </CellProvider>
  );
}
