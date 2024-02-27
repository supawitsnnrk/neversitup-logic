import type * as TestFunctions from "./permutation";
const { permutation } =
  jest.requireActual<typeof TestFunctions>("./permutation");

const successCaseString = [
  {
    input: "s",
    output: ["s"],
  },
  {
    input: "sa",
    output: ["sa", "as"],
  },
  {
    input: "abc",
    output: ["abc", "acb", "bac", "bca", "cab", "cba"],
  },
  {
    input: "abcd",
    output: [
      "abcd",
      "abdc",
      "acbd",
      "acdb",
      "adbc",
      "adcb",
      "bacd",
      "badc",
      "bcad",
      "bcda",
      "bdac",
      "bdca",
      "cabd",
      "cadb",
      "cbad",
      "cbda",
      "cdab",
      "cdba",
      "dabc",
      "dacb",
      "dbac",
      "dbca",
      "dcab",
      "dcba",
    ],
  },
];

describe("Test function permutation", () => {
  it.each(successCaseString)(
    `success case input ${successCaseString}`,
    ({ input, output }) => {
      expect(permutation(input)).toEqual(output);
    }
  );
});
