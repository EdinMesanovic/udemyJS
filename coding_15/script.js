'use strict';

console.log(me);
//console.log(job);
//console.log(year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

console.log(addDecl(1, 2));
//console.log(addExpr(1, 2));
//console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//EXAMPLE

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
