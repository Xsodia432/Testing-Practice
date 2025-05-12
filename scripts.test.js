import {
  capitalize,
  reverseString,
  calculator,
  cypher,
  analyzeArray,
} from "./script.js";

test("Captitalized first letter", () => {
  expect(capitalize("logan")).toBe("Logan");
});
test("Reverse String", () => {
  expect(reverseString("logan")).toBe("nagol");
});
test("Sum", () => {
  expect(calculator.add(5, 5)).toBe(10);
});
test("Subtract", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});
test("Divide", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
test("Multiply", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
test("Caesar Cypher", () => {
  expect(cypher("XYZ", 3)).toBe("ABC");
});
test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
