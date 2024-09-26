/**
 *  HOF memungkinkan kita untuk membuat fungsi yang fleksibel. Misalnya, kita bisa membuat
 *  fungsi apply yang menerima fungsi operation sebagai argumen untuk melakukan sebuah operasi
 *  pada dua nilai argumen lain.
 * */

// function apply(operation, ...args) {
// // kita bisa menambahkan kode lain sebelum operation dijalankan.

//   return operation(...args);
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// function discount(disc, value) {
//   return value - (disc / 100) * value;
// }

// const productPrice = apply(sum, 100, 100, 200);
// const withDiscount = apply(discount, 25, productPrice);

// console.log("Product price:", productPrice); // Output: Product price: 400
// console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300

//* TEKNIK CURRYING *//

// function adjectivfy(adjective) {
//   return function (noun) {
//     return `${noun} ${adjective}.`;
//   };
// }

// function multipleBy(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const coolifier = adjectivfy("keren");
// const funnifier = adjectivfy("seru");

// const multipleByFive = multipleBy(5);

// console.log(coolifier("Dicoding")); // Output: Dicoding keren.
// console.log(funnifier("JavaScript")); // Output: JavaScript seru.
// console.log(multipleByFive(5)); // Output: 25
// console.log(multipleByFive(10)); // Output: 50

//* KOMPOSISI FUNGSI *//

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  };
}

const addOneAndSquare = compose(square, addOne);

console.log(addOneAndSquare(2)); // akar dari (2 + 1) output: 9
console.log(addOneAndSquare(3)); // akar dari (3 + 1) output: 16
console.log(addOneAndSquare(4)); // akar dari (4 + 1) output: 25
