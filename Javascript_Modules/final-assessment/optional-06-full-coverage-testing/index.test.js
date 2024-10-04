import sum from "./index.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("Function sum", () => {
  it("should return the correct sum", () => {
    // Arrange
    const operandA = 3;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 8;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 if string passed on a parameter", () => {
    // Arrange
    const operandA = "0";
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 if string passed on b parameter", () => {
    // Arrange
    const operandA = 6;
    const operandB = "2";

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 if a parameter less then 0", () => {
    // Arrange
    const operandA = -1;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  it("should return 0 if b parameter less then 0", () => {
    // Arrange
    const operandA = 2;
    const operandB = -4;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });
});
