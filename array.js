const arr = [1, " Alison", true, [1, 2, 3]];
let student1 = "Marie";
let student2 = "Audrey";
let student3 = "Meghan";

let students = [" Marie", "Audrey", "Meghan"];
console.log(students[0]);
console.log(students.length);
students[3] = "Mel";

//adding items to an array

students.push("Willow"); // adds items to the end of an array
console.log(students);

students.unshift("Ruth"); // adds items to the beginning of an array
console.log(students);

//removing Elements
students.pop(); //removes the last item from an array
console.log(students);
students.shift(); // removes the first item in the array
console.log(students);

//include indexOf
console.log(students.includes("Mohh")); //  true
console.log(students.indexOf("Mohh"));

// reverse , sort , slice , splice
students.reverse();
console.log("this is reversed;", students);
students.sort();
console.log("this is sort;", students);

console.log("this is sliced", students.slice(1, 3)); // returns a new array with the sliced elements
console.log("this is spliced", students.splice(1, 2)); // removes the elements from an array and returns them
console.log("this is the array;", students);

// higher order array methods
//map , filter , reduce , forEach , find , findIndex , some , every
//map methods

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const marketList = ["rice", "beans", "garri", "yam", "plantain"];
const addedPrefix = marketList.map((item) => "I will buy" + item);
console.log(addedPrefix);

// const double = numbers.map((num)  => {
// return num * 2;
//  })

//filter methods
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const complexion = ["dark", "fair", "medium", "dark", "fair"];
const darkComplexion = complexion.filter((item) => item === "dark");
console.log(darkComplexion);

const findFirstDark = complexion.find((item) => item === "dark");
console.log(findFirstDark);

const findIndexOfDark = complexion.findIndex((item) => item === "dark");
console.log(findIndexOfDark);

// reduce
const nums = [700, 300, 500, 1000, 2000];
const sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum);

const multiply = nums.reduce((acc, cur) => acc * cur, 1);
console.log(multiply);
