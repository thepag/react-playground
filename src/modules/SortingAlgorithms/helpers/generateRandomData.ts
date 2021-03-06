import { Data } from '../typeDefs';

export default function generateRandomData(size: number): Data[] {
  const data: Data[] = [];

  console.time('generateRandomData');

  for (let i = 0; i < size; i += 1) {
    data.push({
      x: `${i}`,
      y: Math.round(Math.random() * 100),
    });
  }

  console.timeEnd('generateRandomData');

  return data;
}
