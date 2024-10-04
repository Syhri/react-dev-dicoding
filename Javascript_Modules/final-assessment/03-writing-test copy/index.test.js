import { sum } from "./index.js";
import { it, describe } from "node:test";
import assert from "node:assert";

describe("Function sum", () => {
  it("should sum two positive numbers correctly", () => {
    // Arrange
    const operandA = 2;
    const operandB = 3;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should sum a positive and a negative number correctly", () => {
    // Arrange
    const operandA = 5;
    const operandB = -3;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should sum two negative numbers correctly", () => {
    // Arrange
    const operandA = -1;
    const operandB = -2;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = -3;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should handle zero correctly", () => {
    // Arrange
    const operandA = 0;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.strictEqual(actualValue, expectedValue);
  });
});
