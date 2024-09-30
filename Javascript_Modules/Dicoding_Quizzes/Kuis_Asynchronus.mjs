import {
  API,
  sampleErrorData,
  sampleSuccessData,
} from "./Kuis_Asynchronus_Support.mjs";

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Return data dari pemanggilan API.fetch berdasarkan
 *    argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise
 *    reject.
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */

function processData(data) {
  return Promise.all(
    data.map((item) =>
      API.fetch(item.delay, item.simulateError)
        .then((result) => result)
        .catch((error) => Promise.reject(error))
    )
  );
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']

