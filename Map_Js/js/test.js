// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array
//          somehow similar to foreach method but the key difference is that it returns a new array

// Example1
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(square);
// const cubed = numbers.map(cube);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// console.log(squared);
// console.log(cubed);

// Example2
// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

// const studentUpper = students.map(upperCase);
// const studentLower = students.map(lowerCase);
// console.log(studentLower);

// function upperCase(element) {
//   return element.toUpperCase();
// }

// function lowerCase(element) {
//   return element.toLowerCase();
// }

// Example3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formatedDates = dates.map(formatDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(formatedDates);
