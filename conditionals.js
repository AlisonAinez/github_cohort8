//if/else
let age = 40;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

let gender = "trans";

if (gender === "female") {
  console.log("you are a female, use the lady's restroom");
} else if (gender === "non-binary") {
  console.log(" use the  non-binary room");
} else if (gender === "trans") {
  console.log("use the trans room");
} else {
  console.log("you are male, use the men's restroom");
}

//loops
//for(start;condition ; increment){
//loop
//}

for (let m = 0; m < 10; m++) {
  console.log(m);
}

let arrOfNames = ["james", "Alliison", "Lily", "Eli", "Kaitlyn"];
console.log(arrOfNames.length);

for (let names = 0; names < arrOfNames.length; names++) {
  console.log("TECHCHRUSH" + arrOfNames[names]);
}

for (let x = 0; x <= 36; x++) {
  console.log(x * 2);
}

//while loop
let loginAttempts = 0;
while (loginAttempts <= 3) {
  console.log(`attempt number ${loginAttempts}`);
  loginAttempts++;
}

let scores = [20, 12, 25, 15];
for (let newScore = 0; newScore < scores.length; newScore++) {
  console.log(scores[newScore] + 20);
}
