import type * as TestFunctions from "./findtheoddint";
const { findTheOddInt } =
  jest.requireActual<typeof TestFunctions>("./findtheoddint");

const successCase = [
  {
    input: [7],
    output: { value: "7", time: 1 },
  },
  {
    input: [8, 1, 2, 1, 2],
    output: { value: "8", time: 1 },
  },
  {
    input: [1, 1, 1, 2, 2, 2, 2, 3],
    output: { value: "1", time: 3 },
  },
];

describe("Test function findTheOddInt", () => {
  it.each(successCase)(
    `success case input ${successCase}`,
    ({ input, output }) => {
      expect(findTheOddInt(input)).toEqual(output);
    }
  );
  it("must return error", () => {
    expect(() => findTheOddInt([])).toThrow(new Error("error"));
  });
});
