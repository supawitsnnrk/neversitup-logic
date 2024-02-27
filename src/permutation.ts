export function permutation(input: string) {
  const expectResult: string[] = [];
  const shuffle = (input: string, result: string) => {
    if (input.length === 0) {
      expectResult.push(result);
      return result;
    }

    for (let i = 0; i < input.length; i++) {
      const remainInput = input.substring(0, i) + input.substring(i + 1);
      shuffle(remainInput, result + input.substring(i, i + 1));
    }
  };
  shuffle(input, "");
  return expectResult;
}

console.log(permutation("abc"));
