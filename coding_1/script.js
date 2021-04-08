let markH = 1.69;
let markW = 78;

let johnH = 1.95;
let johnW = 92;

let markBMI = markW / (markH * markH);
let johnBMI = johnW / (johnH * johnH);
let markHigherBmi = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBmi);
