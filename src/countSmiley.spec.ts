import type * as TestFunctions from './countSmileys';
const { countSmileys } =
  jest.requireActual<typeof TestFunctions>('./countSmileys');

// countSmileys([':)', ';(', ';}', ':-D']); // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

const successCase = [
  {
    input: [':)', ';(', ';}', ':-D'],
    output: 2,
  },
  {
    input: [';D', ':-(', ':-)', ';~)'],
    output: 3,
  },
  {
    input: [';]', ':[', ';*', ':$', ';-D'],
    output: 1,
  },
];

describe('Test function countSmileys', () => {
  it.each(successCase)(
    `success case input ${successCase}`,
    ({ input, output }) => {
      expect(countSmileys(input)).toBe(output);
    },
  );
});
