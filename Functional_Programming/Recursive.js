// GENERATE ARRAY WITH FOOR LOOP

function loopGenerateArray(n) {
  const result = [];

  for (let counter = 0; counter < n; counter++) {
    result.push(counter);
  }
  return result;
}

// console.log(generateArray(5));

// GENERATE ARRAY WITH RECURSIVE

function recursiveGenerateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...recursiveGenerateArray(n - 1), n];
}

console.log(recursiveGenerateArray(5));
