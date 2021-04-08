"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");

function logger() {
  console.log("my name is edin");
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}
console.log(fruitProcessor(3, 5));

//function 2
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);

//function 3
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(1998);
console.log(age1, age2);

//arow function
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

//function
function cut(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applepi = cut(apples);
  const orangepi = cut(oranges);

  console.log(apples, oranges);
  const juice = `juice with ${applepi} apples and ${orangepi} oranges`;

  return juice;
}
console.log(fruitProcessor(2, 3));

//function

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const doPenzije = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const penzija = 65 - age;
  if (penzija <= 0) {
    return `${firstName} je vec u penziji`;
  }
  return `${firstName} ima jos ${penzija} godine do penzije`;
};
console.log(doPenzije(1950, "edin"));

//zadatak:
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scDol = calcAverage(44, 23, 71);
const scKoa = calcAverage(65, 54, 49);
console.log(scDol, scKoa);
function pobjednik(scDol, scKoa) {
  if (scDol * 2 < scKoa) {
    return `pobjednik je tim Koa sa ${scKoa} bodova`;
  } else if (scKoa * 2 < scDol) {
    return `pobjednik je tim Dol sa ${scDol} bodova`;
  } else {
    return "nema pobjednika";
  }
}

console.log(pobjednik(scDol, scKoa));
console.log(pobjednik(223, 555));
