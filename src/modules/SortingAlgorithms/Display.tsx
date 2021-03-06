import React from 'react';
import { Data } from './typeDefs';

import DisplayBar from './DisplayBar';

interface Props {
  data: Data[];
}

export default function Display({ data }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end',  height: '100px' }}>
      {data.map(bar => <DisplayBar key={bar.x} value={bar.y} />)}
    </div>
  );
}
