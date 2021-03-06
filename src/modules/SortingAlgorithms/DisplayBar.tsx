import React from 'react';

interface Props {
  value: number;
}

export default function DisplayBar({ value }: Props) {
  return (
    <div style={{height: `${value}px`, flex: 'auto', display: 'inline-flex', backgroundColor: '#eee' }} />
  );
}
