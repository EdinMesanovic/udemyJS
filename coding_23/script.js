'use strict';

/* const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linkin protoypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduse = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}`);
};

const mike = new Student(`Mike`, 2020, `Computer Science`);
console.log(mike);
mike.introduse();
mike.calcAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/* const edin = new Person(`Edin`, 1999);

console.log(edin);
 */
// 1. New {object} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
/* 
const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1964);

console.log(matilda, jack);

console.log(edin instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
 */
////////////////////////////////////////
//Prototypes
/* console.log(Person.prototype);

edin.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(edin.__proto__);
console.log(edin.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(edin));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = `Homo Sapiens`;

console.log(edin.species, matilda.species);

console.log(edin.hasOwnProperty(`species`));

console.log(edin.__proto__);
console.log(edin.__proto__.__proto__);
console.log(edin.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 6, 8, 7, 5, 6, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);
 */
//class declaration

/* PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}; */

// 1. Classes are NOT hoisted
// 2. Classs are first-class citizes
// 3. Classes are executed in strict mode

/* const account = {
  owner: `Edin`,
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = `Steven`;
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1979);
sarah.calcAge(); */

//////////////////////////////////////////////////////////////////////////////

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  //Set a property thath already exist
  set fullName(name) {
    //console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} ins not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl(`Martha Jones`, 2012, `computer sience`);

martha.introduce();
martha.calcAge();

////////////////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init(`jay`, 2010, `Computer Science`);
jay.introduce();
jay.calcAge();

class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for operning an account, ${owner}`);
  }

  //Public interface, API of Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    //if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  //Private methods
  //#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account(`Edin`, `BAM`, 1111);
console.log(acc1);

/* acc1._movements.push(250);
acc1._movements.push(-140); */
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1.#approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
//console.log(acc1.#movements);
//console.log(acc1.#pin);

//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
