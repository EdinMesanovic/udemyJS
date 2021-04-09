"use strict";
/*
const friend1 = "michael";
const friend2 = "stiven";
const friend3 = "peter";

const friends = ["michael", "stiven", "peter"];
console.log(friends);

//const years = new Array(1991, 1999, 2000, 2001);
console.log(friends[0]);
console.log(friends.length);

friends[2] = "jay";
console.log(friends);

const firstName = "jonas";

const jonas = [firstName, "sumaher", 2037 - 1991, "teacher", friends];
console.log(jonas);

//ex:
function calcAge(birthYear) {
  return 2021 - birthYear;
}

const years = [1999, 1964, 1969];

console.log(calcAge(years[1]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(ages);
*/

//add elements
/*const friends = ["michael", "stiven", "peter"];
const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

//remove elements
friends.unshift("john");
console.log(friends);

//remove last elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

//remove first element
friends.shift();
console.log(friends);

console.log(friends.indexOf("stiven"));

console.log(friends.includes("stiven"));

if (friends.includes("stiven")) {
  console.log("name is in a array");
}
*/
//zadatak

const bill = [125, 555, 44];
const tips = [];
const total = [];

function calcTip(n) {
  let tot;

  if (n >= 50 && n <= 300) {
    tot = n * 0.15;
    console.log("tip is " + tot);
  } else {
    tot = n * 0.2;
    console.log("tip is " + tot);
  }
  total.push(n + tot);
  tips.push(tot);
}

calcTip(bill[0]);
calcTip(bill[1]);
calcTip(bill[2]);

console.log(tips);
console.log(total);
