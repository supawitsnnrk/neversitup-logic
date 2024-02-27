import { isNil, maxBy } from "lodash";

export function findTheOddInt(input: number[]): {
  value: number | string;
  time: number;
} {
  const object: {
    [key: number]: number;
  } = {};
  for (let i = 0; i < input.length; i++) {
    if (!(input[i] in object)) {
      object[input[i]] = 1;
    } else {
      object[input[i]] += 1;
    }
  }
  const a = maxBy(Object.keys(object), (o) => object[o] % 2 !== 0 && object[o]);
  if (isNil(a)) {
    throw new Error("error");
  }
  return { value: a, time: object[a] };
}

console.log(findTheOddInt([1, 1, 1, 2, 2, 2, 2, 3]));
