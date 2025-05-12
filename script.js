export function capitalize(name) {
  return name.split("")[0].toUpperCase() + name.split("").splice(1).join("");
}
export function reverseString(name) {
  let kek = "";
  for (let i = name.length - 1; i >= 0; i--) {
    kek += name[i];
  }
  return kek;
}
export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
export function cypher(word, shift) {
  let cypher = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].toString().match(/^[A-Za-z]+$/)) {
      if (word[i].charCodeAt(0) >= 120 && word[i].charCodeAt(0) <= 122) {
        cypher += String.fromCharCode(word[i].charCodeAt(0) - 23);
        continue;
      } else if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
        cypher += String.fromCharCode(word[i].charCodeAt(0) - 23);
        continue;
      }
      cypher += String.fromCharCode(word[i].charCodeAt(0) + shift);
    } else cypher += word[i];
  }
  return cypher;
}
export function analyzeArray(data) {
  const average = data.reduce((prev, curr) => prev + curr, 0) / data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const length = data.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
