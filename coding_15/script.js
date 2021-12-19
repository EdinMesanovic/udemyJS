'use strict';

/* console.log(me);
//console.log(job);
//console.log(year);

/* var me = `Jonas`;
let job = `teacher`;
const year = 1991; */

/* console.log(addDecl(1, 2));
//console.log(addExpr(1, 2));
//console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
 */
//EXAMPLE

/* if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const matilda = {
  year: 2017,
}; */

//matilda.calcAge = edin.calcAge;
//console.log(matilda.calcAge());

//const f = edin.calcAge;
//f();
//console.log(matilda.f); */

/* const edin = {
  firstName: `Edin`,
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    /* const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); */

//solution
/*
    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

edin.greet();
edin.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 7, 8);

var addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
};

addArrow(2, 5, 7);
 */

/* let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: `Edin`,
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(`Friend`, friend);
console.log(`me`, me); */

let lastName = `Williams`;
let oldLastNAme = lastName;
lastName = 'Davis';

console.log(lastName, oldLastNAme);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;

const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);

console.log(`Before marriage`, jessica2);
console.log(`After marriage`, jessicaCopy);
