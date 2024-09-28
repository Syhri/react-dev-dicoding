import { makeCoffee, sendCoffee } from "./Simuasi_Coffe.mjs";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`); // 1

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`); // 6
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`); // 6
  });
});
