import { makeCoffe, sendCoffe } from "./coffee.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffe(() => {
  sendCoffe(() => {
    console.log("Pramusaji memberikan kopi pesanan.");
    console.log("Saya mendapatkan kopi dan menghabiskannya.");
  });
});
