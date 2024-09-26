// // Tekinik Memoization
// function add(a, b) {
//   return a + b;
// }

// // Memoization: simpan hasil perhitungan untuk input tertentu
// let cache = {};

// function memoizedAdd(a, b) {
//   const key = `${a},${b}`;

//   if (key in cache) {
//     console.log("Mengambil dari cache!");
//     return cache[key]; // Gunakan hasil yang sudah ada di cache
//   }

//   console.log("Menghitung hasil baru...");
//   const result = add(a, b);
//   cache[key] = result; // Simpan hasil baru ke cache
//   return result;
// }

// // Tes fungsi memoizedAdd
// console.log(memoizedAdd(3, 4)); // Menghitung hasil baru... 7
// console.log(memoizedAdd(3, 4)); // Mengambil dari cache! 7

// Teknik Monads

// Fungsi yang mengembalikan Promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulasi request data
    const data = { name: "Fitra", age: 19 }; // Data palsu
    if (data.age > 19) {
      resolve(data); // Jika data ditemukan, panggil resolve
    } else {
      reject("Data tidak ditemukan"); // Jika tidak, panggil reject
    }
  });
} 

// Menggunakan Promise
fetchData("https://example.com")
  .then((result) => {
    console.log("Data diterima:", result);
    return result.age;
  })
  .then((age) => {
    console.log("Umur:", age);
  })
  .catch((error) => {
    console.error(error); // Menangani jika terjadi error
  });
