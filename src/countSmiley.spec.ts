import type * as TestFunctions from "./countSmileys";
const { countSmileys } =
  jest.requireActual<typeof TestFunctions>("./countSmileys");

const successCase = [
  {
    input: [":)", ";(", ";}", ":-D"],
    output: 2,
  },
  {
    input: [";D", ":-(", ":-)", ";~)"],
    output: 3,
  },
  {
    input: [";]", ":[", ";*", ":$", ";-D"],
    output: 1,
  },
];

describe("Test function countSmileys", () => {
  it.each(successCase)(
    `success case input ${successCase}`,
    ({ input, output }) => {
      expect(countSmileys(input)).toBe(output);
    }
  );
});
