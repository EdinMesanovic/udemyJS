let markH = 1.69;
let markW = 78;

let johnH = 1.95;
let johnW = 92;

let markBMI = markW / (markH * markH);
let johnBMI = johnW / (johnH * johnH);

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log("Marks BMI " + markBMI + " is bigger than Johns BMI " + johnBMI);
} else {
  console.log("Johns BMI " + johnBMI + " is bigger than Marks BMI!");
}
