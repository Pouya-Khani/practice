/*const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's`);
} else {
  console.log(`John's BMI is higher than Mark's`);
}

console.log(johnBMI, markBMI, markHigherBMI);









const avgDolphnie = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

console.log(avgDolphnie, avgKoalas);

if (avgDolphnie > avgKoalas) {
  console.log(`Team Dolphines is the winner.`);
} else if (avgDolphnie < avgKoalas) {
  console.log(`Team Koalas is the winner.`);
} else if (avgDolphnie === avgKoalas) {
  console.log(`Draw`);
}


const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `the bill is ${bill}, the tip is ${tip}, and the total value is ${
    bill + tip
  }.`
);





const calcAvg = (a, b, c) => (a + b + c) / 3;

let scoreDolphnie = calcAvg(88, 54, 41);
let scoreKoalas = calcAvg(23, 34, 27);

// [scoreDolphnie, scoreKoalas] = [scoreKoalas, scoreDolphnie];

console.log(scoreDolphnie, scoreKoalas);

const checkWinner = function (avgDolphnies, avgKoalas) {
  if (avgDolphnies >= avgKoalas * 2) {
    console.log(`Team Dolphines is the winner.`);
  } else if (avgKoalas >= avgDolphnies * 2) {
    console.log(`Team Koalas is the winner`);
  } else {
    console.log(`No Winner`);
  }
};
checkWinner(scoreDolphnie, scoreKoalas);






const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);









const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI ${mark.bmi} is higher than John's ${john.bmi}`);
} else if (john.bmi > mark.bmi) {
  console.log(`John's BMI ${john.bmi} is higher than Mark's ${mark.bmi}`);
}








const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 105, 40, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));





const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(`... ${str}`);
};

printForecast(data2);



const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = players[0];
// const players1 = players[1];
//1.
[players1, players2] = game.players;
//  console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(players.length + " goals were scored");
};
printGoals(...game.scored);

//7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");





const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// REMEMBER
// 4.
const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);





const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// console.log(gameEvents);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event} `);
}




// THIS TEST DATA (pasted to textarea)
// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});




*/

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("hi")("pooya");
