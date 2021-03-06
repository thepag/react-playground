import { Data } from '../typeDefs';

export default function nativeSort(
  bin: Data[],
): Data[] {
  console.time('nativeSort');
  const result = [...bin].sort((a, b) => a.y - b.y);
  console.timeEnd('nativeSort');
  return result;
}
