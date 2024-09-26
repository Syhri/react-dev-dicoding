// export function name() {
//   alert("My Name is Fitra Abadi");
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.eat = function () {
//   console.log(`${this.name} is eating`);
// };

// const person1 = new Person("Fitra", 19);
// const person2 = new Person("Anggi", 19);

// console.log(person1.name);
// console.log(person2.name);

// person1.eat();
// person2.eat();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// // Membuat instance dari Person
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.name); // Output: Alice
// console.log(person2.name); // Output: Bob

// person1.eat(); // Output: Alice is eating
// person2.eat(); // Output: Bob is eating

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log("iOS have a behavior AirDrop");
  }
  hpGuaAipong() {
    console.log("Hape gua aipong, hape lu apa?");
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const ios = new iOS("black", "A", "12 Pro Max");
const android = new Android("white", "B", "Galaxy S21");

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop
// ios.hpGuaAipong();

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen
