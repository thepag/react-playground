import { Data } from '../typeDefs';

export default function bubbleSort(
  bin: Data[],
): Data[] {
  const size = bin.length;
  const result = [...bin];

  console.time('bubbleSort');

  for (let i = 1; i < size; i += 1) {
    for (let j = 0; j < size - i; j += 1) {
      if (result[j].y > result[j + 1].y) {
        const swap = result.splice(j, 1, result[j + 1])[0];
        result.splice(j + 1, 1, swap);
      }
    }
  }

  console.timeEnd('bubbleSort');

  return result;
}
