'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    adress,
  }) {
    console.log(
      `Oreder receiver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
    console.log(
      `ing in pizza are ${mainIng}, and others are ${otherIng[0]}, ${otherIng[1]}, ${otherIng[2]}`
    );
  },
};

const rest1 = {
  name: `Capri`,
  numGuest: 0,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
};

//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

rest2.owner = rest2.owner && `anonymus`;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest2, rest1);

console.log(`----OR----`);
console.log(3 || `edin`);
console.log(`` || `edin`);
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 0;
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guests1);

const guests = restaurant.numGuests || 10;
console.log(guests);
//Nullish values: null , undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log(`----And----`);
console.log(`hello` && 23 && null && `edin`);

if (restaurant.orderPizza) {
  restaurant.orderPizza(`mashrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mashrooms`, `spinach`);

//functions Rest
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
console.log(...x);

restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
//restaurant.orderPizza('mashrooms');
//Object REst
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//REST
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const newRes = { foundedIn: 2001, ...restaurant, founder: `Jozef` };
console.log(newRes);

const resCopy = { ...restaurant };
resCopy.name = `risto roma`;
console.log(resCopy.name);
console.log(restaurant.name);

const ingredients = [
  /*  prompt(`Lets make pasta!
Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`), */
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);
console.log(...newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = `edin`;
const letters = [...str, ` `, `M.`];
console.log(...letters);
/* restaurant.orderDelivery({
  time: `22:30`,
  adress: `Viva del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ adress: `Viva del Sole, 21`, starterIndex: 2 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// [secondary, main]

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main1] = restaurant.order(2, 0);
console.log(starter, main1);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
 */
