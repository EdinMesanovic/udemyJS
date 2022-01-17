'use strict';

const game = {
  team1: `Bayern Munich`,
  team2: `Borrussia Dortmund`,
  players: [
    [
      `Neuer`,
      `Pavard`,
      `Martinez`,
      `Alaba`,
      `Davies`,
      `Kimmich`,
      `Goretzka`,
      `Coman`,
      `Muller`,
      `Gnarby`,
      `Lewandowski`,
    ],
    [
      `Burki`,
      `Schulz`,
      `Hummels`,
      `Akanji`,
      `Hakimi`,
      `Weigl`,
      `Witsel`,
      `Hazard`,
      `Brandt`,
      `Sancho`,
      `Gotze`,
    ],
  ],
  score: `4:0`,
  scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
  date: `Nov 9th, 2037`,
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//task 1
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1, players2);

//task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//task 4
const playersFinal = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(playersFinal);

//task 5!!!!!!!
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//task 6
const printGoals = function (...playesName) {
  console.log(`${playesName.length} goals were scored`);
  for (let i = 0; i < playesName.length; i++) {
    console.log(playesName[i]);
  }
};
//printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
printGoals(...game.scored);

//task 7
team1 < team2 && console.log(`Team 1 is more likely to win`);

//coding challenge 2
console.log(`Codding challange 2`);
//task 1
for (const [number, player] of game.scored.entries()) {
  console.log(`Goal ${number + 1}: ${player}`);
}

//task 2

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

//task 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `vicotry ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//task 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//Coding challenge
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//coding 3

//taks 1
const events = [...gameEvents.values()];
console.log(new Set(events));

//task 2
gameEvents.delete(64);
console.log(gameEvents);

//task 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//task 4
for (const [k, e] of gameEvents) {
  if (k <= 45) {
    console.log(`[First Half]: ${k}: ${e}`);
  } else console.log(`[Second Half]: ${k}: ${e}`);
}

//Coding 4

//task 1
function toCamelCase(item) {
  const [a, b] = item.split(`_`);
  console.log(a + b[0].toUpperCase() + b.slice(1));
}

toCamelCase(`underscore_case`);
toCamelCase(`undersc_sadas`);

//task 2

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [a, b] = row.toLowerCase().trim().split(`_`);
    const output = `${a}${b.replace(b[0], b[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${i + 1}`);
  }
});

/* underscore_case
first_name
Some_Varoable
calculate_AGE
delayed_departure */

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
