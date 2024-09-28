import { doSomething } from "./Async_Await_Export.mjs";

async function promiseWithAsyncAwait() {
  try {
    console.log("Start.");

    const result = await doSomething();
    console.log(result);

    console.log("End.");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/

//! NOTE:
// Hal yang perlu kita tahu adalah tipe parameter static method, yaitu array berisi sejumlah Promise. 
// Oleh karena itu, static method Promise dapat menjalankan banyak Promise.
