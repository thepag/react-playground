import React, { FormEvent, useState } from 'react';

import nativeSort from './helpers/nativeSort';
import bubbleSort from './helpers/bubbleSort';
import generateRandomData from './helpers/generateRandomData';
import Display from './Display';
import { Data } from './typeDefs';

const SIZE = 100;
const DATA = generateRandomData(SIZE);

export default function SortingAlgorithm() {
  const [size, setSize] = useState<number>(SIZE);
  const [data, setData] = useState<Data[]>(DATA);

  function onNativeSortClick() {
    console.log({ label: 'onNativeSortClick' })
    setData(nativeSort(data));
  }

  function onBubbleSortClick() {
    console.log({ label: 'onBubbleSortClick' })
    setData(bubbleSort(data));
  }

  function onRandomiseClick() {
    console.log({ label: 'onRandomiseClick' })
    setData(generateRandomData(size));
  }

  function onSizeChange(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    console.log({ label: 'onSizeChange', value })
    setSize(Number(value));
  }

  // console.log({ data });

  return (
    <div className="App">
      <div>
        <button onClick={onNativeSortClick}>Native Sort</button>
        <button onClick={onBubbleSortClick}>Bubble Sort</button>
        <button onClick={onRandomiseClick}>Randomise</button>
        <input type="number" value={size} onChange={onSizeChange} />
      </div>
      <Display data={data} />
    </div>
  );}
