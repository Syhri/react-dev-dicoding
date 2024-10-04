//! TESTING DI NODE JS

import { test } from "node:test";
import assert from "node:assert";
import { add } from "./Calculator.mjs";

test("should add correctly", () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});
/** Output:
✔ should add correctly (5.6375ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 55.1143
 */

// 1 kasus pengujian dinyatakan lolos oleh Node.js.

//// 1. Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
// 2. Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
// 3. Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number.

test("should throw an error if string passed on numA parameter", () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = "5";
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});
/** Output sebelum diubah func sum di file Calculator.mjs:
  ✖ should throw an error if string passed on numA parameter (2.2769ms)
  AssertionError [ERR_ASSERTION]: Missing expected exception (Error).
      at TestContext.<anonymous> (file:///E:/REACT%20DEV%20DICODING%20COURSE/Javascript_Modules/Code_Quality/Testing_NodeJS/test.mjs:50:10)
      at Test.runInAsyncScope (node:async_hooks:206:9)
      at Test.processPendingSubtests (node:internal/test_runner/test:374:18)
      at Test.postRun (node:internal/test_runner/test:715:19)
      at Test.run (node:internal/test_runner/test:673:12)
      at async startSubtest (node:internal/test_runner/harness:216:3) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: [Function],
    operator: 'throws'
  }
 */

/** Output setelah diubah func sum di file Calculator.mjs:
 *  ✔ should add correctly (2.6582ms)
    ✔ should throw an error if string passed on numA parameter (1.2003ms)
    ℹ tests 2
    ℹ suites 0
    ℹ pass 2
    ℹ fail 0
    ℹ cancelled 0
    ℹ skipped 0
    ℹ todo 0
    ℹ duration_ms 24.8801
 */

// Dengan ini kedua pengujuan lolos:

//// 1. Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
//// 2. Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
// 3. Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number.

test("should throw an error if string passed on numB parameter", () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = 10;
    const operandB = "8";

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});
/** Output sebelum diubah func sum di file Calculator.mjs:
  ✖ should throw an error if string passed on numB parameter (4.1004ms)
  AssertionError [ERR_ASSERTION]: Missing expected exception (Error).
      at TestContext.<anonymous> (file:///E:/REACT%20DEV%20DICODING%20COURSE/Javascript_Modules/Code_Quality/Testing_NodeJS/test.mjs:98:10)
      at Test.runInAsyncScope (node:async_hooks:206:9)
      at Test.run (node:internal/test_runner/test:631:25)
      at Test.processPendingSubtests (node:internal/test_runner/test:374:18)
      at Test.postRun (node:internal/test_runner/test:715:19)
      at Test.run (node:internal/test_runner/test:673:12)
      at async Test.processPendingSubtests (node:internal/test_runner/test:374:7) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: [Function],
    operator: 'throws'
  }
 */

/** Output setelah diubah func sum di file Calculator.mjs:
✔ should add correctly (2.9594ms)
✔ should throw an error if string passed on numA parameter (0.9812ms)
✔ should throw an error if string passed on numB parameter (0.3844ms)
ℹ tests 3
ℹ suites 0
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 24.6422
 */

//? MISSION COMPLETED

// Dengan ini semua pengujian sudah komplit:

//// 1. Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
//// 2. Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
//// 3. Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number.

//! SEMUA TEST CASE DI ATAS BISA KITA GRUPKAN AGAR LEBIH MUDAH DI-MAINTAIN
