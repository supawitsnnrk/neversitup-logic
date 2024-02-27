import { includes } from "lodash";

export function countSmileys(input: string[]): number {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const emotion = input[i];
    if (!(includes(emotion, ":") || includes(emotion, ";"))) {
      continue;
    }
    if (includes(emotion, ")") || includes(emotion, "D")) {
      count++;
    }
  }
  return count;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
