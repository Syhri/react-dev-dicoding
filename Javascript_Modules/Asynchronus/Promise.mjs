import { makeCoffee, sendCoffee } from "./Promise_Export.mjs";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });
