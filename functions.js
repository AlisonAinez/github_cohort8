//declare

//functions without parameters
function greetings() {
  console.log("HELLO WORLD");
}

greetings();

//functions with parameters
function welcome(name) {
  console.log(`Welcome to the class MR/MISS/MRS ${name}`);
}
welcome("Alison");

//add
function add() {
  let x = 4;
  let y = 6;
  console.log("the addition of x andd y");
  return x + y;
}
console.log(add());

function addition(x, y) {
  return x + y;
}
console.log(addition(9, 10));

function ageCheck(age) {
  return age >= 18;
}

let alisonAge = ageCheck(21);
console.log(alisonAge);

function ageCheck(age) {
  if (age <= 18) {
    return "please  GET OUT ... YOU ARE UNDERAGE";
  } else {
    return " Buy one bottle for me Asap!!";
  }
}

let maryAge = ageCheck(16);
console.log(maryAge);

//4

function luckyNumber(number) {
  if (number === 4) {
    return " CONTRATULATIONS";
  } else {
    return "TRY AGAIN";
  }
}

let livnumber = luckyNumber(12);
console.log(livnumber);

//Scope
//global scope
let score;
function gradingSystem() {
  if (score >= 50) {
    return "PASSED!!";
  } else {
    return "FAILED!!!!";
  }
}

function deliveryFee() {
  let fee = 5000;
  return fee;
}

let grade;
function scoreMatrix() {
  if (grade >= 70 && grade <= 100) {
    return "A";
  } else if (grade >= 50 && grade <= 69) {
    return "B";
  } else {
    return "F";
  }
}

//ARROW FUNCTIONS
const minus = (num) => {
  return num - 50;
};
let result = minus(75);
