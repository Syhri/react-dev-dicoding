// Sebelum diubah
// export function add(numA, numB) {
//   return numA + numB;
// }

// Setelah diubah
// export function add(numA, numB) {
//   if (typeof numA !== "number") {
//     throw new Error("Expected a number");
//   }

//   return numA + numB;
// }

// Setelah setelah diubah
export function add(numA, numB) {
  if (typeof numA !== "number" || typeof numB !== "number") {
    throw new Error("Expected a number");
  }

  return numA + numB;
}
