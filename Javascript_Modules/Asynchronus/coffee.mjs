export function makeCoffe(callback) {
  const time = 5000;
  const inSecond = Math.ceil(time / 1000);
  console.log(
    `Please waiting, while the waitress serves you a coffe in ${inSecond} second.`
  );

  setTimeout(() => {
    console.log("The waitress finishes making coffee.");
    callback();
  }, time);
}

export function sendCoffe(callback) {
  const time = 2000;
  console.log("Waitress delivers a coffee orders");

  setTimeout(() => {
    console.log("Waitress just arrive at your place");
    callback();
  }, time);
}
