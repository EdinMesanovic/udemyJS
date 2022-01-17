'use strict';

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //numPassengers = numPassengers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 5);
createBooking(`LH123`, undefined, 1000);
 */

/* const flight = `LH234`;
const edin = {
  name: `Edin Mesanovic`,
  passport: 23134356,
};

function checkIn(flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passenger === 23134356) {
    alert(`Check In`);
  } else {
    alert(`Wrong passport!`);
  }
}

/* checkIn(flight, edin);
console.log(flight);
console.log(edin);
 */
/* function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(edin);
checkIn(flight, edin);
 */

/* function oneWord(str) {
  return str.replaceAll(` `, ``).toLowerCase();
}

function upperFirstWord(str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
}

//High order function
function transformer(str, fn) {
  console.log(`Transformed tring: ${str}`);
  console.log(`Transformed tring: ${fn(str)}`);
  console.log(`Transformed tring: ${fn.name}`);
}

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

function high5() {
  console.log(`😀`);
}
document.body.addEventListener(`click`, high5);

[`Edin`, `Jonas`, `Adam`].forEach(high5); */

/* function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greet(`Hey`)(`Edin`);

const grt = a => {
  return b => {
    console.log(`${a} ${b}`);
  };
};

grt(`hello`)(`all`);
 */

/* const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
}; */

/* lufthansa.book(239, `Edin Mesanovic`);
lufthansa.book(635, `John Smith`);
console.log(lufthansa);

const eurowing = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book; */
// book(23, `Sarah Williams`);

/* book.call(eurowing, 23, `Sarah Williams`);
console.log(eurowing);

book.call(lufthansa, 239, `Mary Cooper`);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};
 */
/* book.call(swiss, 345, `Jonas Smith`);

//Apply method
const flightDate = [457, `Gorge Cooper`];
book.apply(swiss, flightDate);
console.log(swiss);

book.call(swiss, ...flightDate);
 */
//Bind method
/* const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steaven Williams`);

const bookEW23 = book.bind(eurowing, 23);
bookEW23(`Steaven Williams`);
 */
//with event listener
/* lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));
 */
//Partial application

/* const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(300));

const addTaxRate = function (rate) {
  return function Vat(value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.17);
console.log(addVAT2(300));
console.log(addVAT2(300));
 */

//IIFE
/* const runOnce = function () {
  console.log(`This will never run again`);
};

runOnce();

(function () {
  console.log(`This will never run again`);
})();

(() => console.log(`This will never run again`))(); */

//closurs

/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passanger`);
  };
};

const booker = secureBooking();
booker();
booker();

console.dir(booker);
 */

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start bording in ${wait} seconds`);
};

boardPassengers(180, 3);
