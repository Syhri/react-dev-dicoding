// //! IMMUTABLE ARRAY

// function max(arrayOfNumbers) {
//   return arrayOfNumbers.sort((a, b) => a - b).pop();
// }

// const numbers = [10, 23, 24, 7, 42, 18];
// const largest = max(numbers);

// console.log(largest); // Output: 42
// console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

// //! IMMUTABLE OBJECT

// function registerEmail(person, email) {
//   return Object.assign(person, { email });
// }

// const person = {
//   name: "John",
//   username: "johndoe",
// };

// const personWithEmail = registerEmail(person, "john@dicoding.com");

// console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
// console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

//? Secara umum, proses duplikasi data dapat dilakukan dengan mudah
//? menggunakan sintaksis spread operator.

// function max(arrayOfNumber) {
//   // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
//   return [...arrayOfNumber].sort((a, b) => a - b).pop();
// }

// function registerEmail(person, email) {
//   // menggunakan spread operator untuk menduplikasi nilai person
//   return { ...person, email };
// }

// const numbers = [10, 23, 24, 7, 42, 18];
// const largest = max(numbers);

// console.log(largest); // Output: 42
// console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

// const person = {
//   name: "John",
//   username: "johndoe",
// };

// const personWithEmail = registerEmail(person, "john@dicoding.com");

// console.log(person); // Output: { name: 'John', username: 'johndoe' }
// console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

//* OBJECT FREEZE RECURSIVE *//

function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city); // Output: 'New York'
