// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));


const arr = [5, 3, 7, 9];
let arr2 = [];
function rev(n) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }

  console.log(arr2);
}

rev(arr);


function kelvin() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Temp in Celsius"),
  };

  const temp = Number(measurement.value) + 273;
  return temp;
}

console.log(kelvin());
*/

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i] + "C in day " + Number(i + 1));
  }
}

printForecast(arr2);
console.log("TESTS");
printForecast(arr);
