'use strict';

// Data needed for a later exercise
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, adress }) {
    console.log(
      `Oreder receiver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
    console.log(
      `ing in pizza are ${mainIng}, and others are ${otherIng[0]}, ${otherIng[1]}, ${otherIng[2]}`
    );
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ` `} ${type.replaceAll(
    `_`,
    ` `
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(`:`, `h`)})`.padStart(40);
  console.log(output);
}

//WORKING WITH STRINGS!!
const airline = `TAP Air Portugal`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix cap in name

function changeName(passenger) {
  const lower = passenger.toLowerCase();
  console.log(lower[0].toUpperCase() + lower.slice(1));
}
changeName(`MajOrka`);
// Comparing email
const email = `hello@edin.com`;
const loginEmail = `  Hello@Edin.Com  `;

/* const lowerEmail = loginEmail.toLowerCase();
const trimmedEamil = lowerEmail.trim();
console.log(trimmedEamil); */

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

//replacing
const priceEUR = `288,97€`;
const priceUS = priceEUR.replace(`€`, `$`).replace(`,`, `.`);
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replaceAll(`door`, `gate`));
//Booleans
const plane = `Airbus A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.startsWith(`Air`));

if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
  console.log(`Part of the new airbus family`);
}

//Practice ex
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`Person cant enter a plane`);
  } else console.log(`Person is clear`);
};
checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

//Split
console.log(`a+very+nice+string`.split(`+`));
console.log(`Edin Mesanovic`.split(` `));
const [firstName, lastName] = `Edin Mesanovic`.split(` `);
console.log(firstName, lastName);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

/* const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann'); */

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};

capitalizeName(`Jessica and smith davis`);
capitalizeName(`edin mesanovic`);

//Padding
const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`).padEnd(30, `+`));
console.log(`Edin`.padStart(25, `+`).padEnd(30, `+`));

function maskCreditCard(number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
}

console.log(maskCreditCard(4334346343453345));
console.log(maskCreditCard(`43343445653345`));

//Repeat
const message2 = `Bad waether.. All delayed`;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`-.- `.repeat(n)}`);
};

planesInLine(5);
/* const plane = `A320`;

console.log(plane[0]);
console.log(`B737`[0]);
console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === `B` || seat.slice(-1) === `E`) {
    console.log(`Your seat are in middle od seats`);
  } else {
    console.log(`Your seat are not in middle `);
  }
};

checkMiddleSeat(`11B`); */
//MAP!!!!
/* const rest = new Map();
rest.set(`name`, `clasisico italiano`);
rest.set(1, `Firenze, Italy`);
rest.set(2, `San Marino, Italy`);
console.log(rest);

rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `we are open`)
  .set(false, `we are closed`);

console.log(rest.get(`name`));
console.log(rest.get(true));

const time = 18;
if (time <= rest.get(`close`) && time >= rest.get(`open`)) {
  console.log(rest.get(true));
} else console.log(rest.get(false));

console.log(rest.has(`categories`));
rest.delete(2);
console.log(rest);
console.log(rest.size); */
//rest.clear();

/* const arr = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector(`h1`), `Heading`);

console.log(rest);

const question = new Map([
  [`question`, `what is the best programing language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `correct`],
  [false, `try again`],
]); */

/* console.log(question.get(`question`));
for (const [a, b] of question) {
  if (typeof a == `number`) {
    console.log(`Answer ${a}: ${b}`);
  }
} */
//const i = prompt(`${question.get(`question`)} 1, 2 or 3`);
/* if (i == 3) {
  console.log(`Answer is ${question.get(true)} ${question.get(3)}`);
} else {
  console.log(`Answer is wrong ${question.get(false)}`);
} */

//MAP TO ARRAY!!!
/* console.log([...question]); */
//console.log(question.entries());
/* console.log([...question.keys()]);
console.log([...question.values()]); */

//SETSSS!!!
/* const oredrsSet = new Set([
  `pasta`,
  `pizza`,
  `pizza`,
  `risoto`,
  `pasta`,
  `pizza`,
]);
console.log(oredrsSet);

console.log(new Set(`edin`));

console.log(oredrsSet.size);
console.log(oredrsSet.has(`pizza`));
console.log(oredrsSet.has(`bread`));
oredrsSet.add(`steak`);
oredrsSet.delete(`pizza`); */
//oredrsSet.clear();
/* console.log(oredrsSet);

for (const order of oredrsSet) {
  console.log(order);
}
const staff = [`waiter`, `chef`, `waiter`, `menager`, `chef`, `waiter`];
const newSet = new Set(staff);
console.log(newSet);
const newArr = [...newSet];
console.log(newArr);

console.log(new Set(`edinmesanovic`).size); */

//Looping objects 114
/* const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
 */
//object Values
/* const val = Object.values(openingHours);
console.log(val);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

//Optional chaining!!!!
/* console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
 */
/* for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? `unknown`;
  console.log(`On ${day}, we open at ${open}`);
}
 */
//methods
//console.log(restaurant.orderRisoto?.(0, 1) ?? `method doesn exist`);

//Arrays
/* const users = [{ name: `Edin`, email: `edin@example.com` }];
console.log(users[0]?.name ?? `user array empty`); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}
*/
/* for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

//console.log([...menu.entries()]);

/* const rest1 = {
  name: `Capri`,
  numGuest: 0,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
}; */

//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

/* rest2.owner = rest2.owner && `anonymus`;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest2, rest1);

console.log(`----OR----`);
console.log(3 || `edin`);
console.log(`` || `edin`);
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 0; */
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guests1);

/* const guests = restaurant.numGuests || 10;
console.log(guests); */
//Nullish values: null , undefined
/* const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log(`----And----`);
console.log(`hello` && 23 && null && `edin`);

if (restaurant.orderPizza) {
  restaurant.orderPizza(`mashrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mashrooms`, `spinach`);
 */
//functions Rest
/* const add = function (...numbers) {
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

restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`); */
//restaurant.orderPizza('mashrooms');
//Object REst
/* const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); */

//REST
/* const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); */

//objects
/* const newRes = { foundedIn: 2001, ...restaurant, founder: `Jozef` };
console.log(newRes);

const resCopy = { ...restaurant };
resCopy.name = `risto roma`;
console.log(resCopy.name);
console.log(restaurant.name);

const ingredients = [ */
/*  prompt(`Lets make pasta!
Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`), */
/* ];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);
console.log(...newMenu); */

//copy array
//const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
/* const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = `edin`;
const letters = [...str, ` `, `M.`];
console.log(...letters); */
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
