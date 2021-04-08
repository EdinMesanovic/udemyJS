/*
const jonas = {
  firstName: "edin",
  lastName: "mesanovic",
  age: 2021 - 1999,
  job: "student",
  friends: ["john", "mike", "stiven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "what do u want to know about edin? choose between firstName, lastName,age , job and friends"
);

//console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log("property is there " + jonas[interestedIn]);
} else {
  console.log("property " + "`" + interestedIn + "`" + " is not there");
}

jonas.location = "portugal";
jonas["instagram"] = "edo_mesanovic";
console.log(jonas);

console.log(
  jonas.firstName +
    " has " +
    jonas.friends.length +
    " friends, and his best friend is " +
    jonas.friends[0]
);


const edin = {
  firstName: "edin",
  lastName: "mesanovic",
  birthYear: 1999,
  job: "student",
  friends: ["john", "mike", "stiven"],
  driverLicense: true,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function (n) {
    
    if (n) {
      this.summary = this.firstName + " is a " + this.calcAge() + "-years old " + this.job + " and he has a drivers license.";
      return this.summary;
    } else {
      this.summary = this.firstName + " is a " + this.calcAge() + "-years old " + this.job + " and he has no drivers license.";
      return this.summary;
    }
  },
};
console.log(edin.getSummary(edin.driverLicense));
console.log(edin);

*/

//zadatak
const Mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  calcBmi: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};


const John = {
  name: "John",
  mass: 92,
  height: 1.95,
  calcBmi: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

console.log(John.calcBmi() + " - " +  Mark.calcBmi());

if (Mark.BMI > John.BMI){
  console.log("Marks Bmi " + Mark.BMI + " is higher than Johns "+ John.BMI);
}else {
  console.log("Johns Bmi " + John.BMI + " is higher than Marks "+ Mark.BMI);
}