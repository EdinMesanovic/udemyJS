"use strict";
/*
for (let i = 1; i <= 10; i++) {
  console.log( i + ". console.log");
}


const edinsArray = [
  "Edin",
  "Mesanovic",
  22,
  "student",
  ["mike", "piter", "john"], 
  true
];
let newArr = [];
for (let i = 0; i < edinsArray.length; i++) {
  console.log(edinsArray[i], typeof edinsArray[i]);
  newArr.push(typeof edinsArray[i]);
  
}
console.log(newArr);

const years = [1991, 2007, 1969, 2020];
let ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);

}
console.log(ages);

//CONTINUE!!!
console.log("--- ONLY STRINGS ---")
for (let i = 0; i < edinsArray.length; i++) {
  if (typeof edinsArray[i] !== "string") continue;
  console.log(edinsArray[i], typeof edinsArray[i]);
}

//BREAK
console.log("--- BREAK WITH NUMBER ---")
for (let i = 0; i < edinsArray.length; i++) {
  if (typeof edinsArray[i] == "number") break;
  console.log(edinsArray[i], typeof edinsArray[i]);
}


const edinsArray = [
  "Edin",
  "Mesanovic",
  22,
  "student",
  ["mike", "piter", "john"]
];
let newArr = [];
for (let i = edinsArray.length  ; i >= 0; i--){
  console.log(edinsArray[i]);
}

for (let i= 1; i <= 3; i++) {
  console.log("starting ex " + i);
  for(let rep = 0; rep <= 5; rep++){
    console.log("lifting rep " + rep)
    
  }

}

let rep = 1;
while (rep <= 10) {
  console.log("rep one " + rep);

  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log("we got a number " + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log("we got number 6");
  }
}
*/

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(n) {
  let tot;

  if (n >= 50 && n <= 300) {
    tot = n * 0.15;
  } else {
    tot = n * 0.2;
  }
  total.push(n + tot);
  tips.push(tot);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

for (let i = 0; i < bill.length; i ++) {
  calcTip(bill[i]);
  }

console.log(bill);
console.log(calcAverage(total));
console.log(tips, total);
