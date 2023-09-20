'use strict';

const weekdays = ['sun', 'tue', 'wed'];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0, // Open 24 hours
    close: 12 + 24,
  },
};
// console.log(openingHours);

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

  //es6
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderpasta(ing1, ing2, ing3) {
    console.log(`heres is your pasta made with ${ing1} ,${ing2} and ${ing3}.`);
  },

  orderPizza(mainIngreient, ...otherings) {
    console.log(mainIngreient);
    console.log(otherings);
  },
};

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF]  ${key} : ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key} : ${value}`);
//   }
// }

// const avg = Math.trunc(90 / gameEvents.size);
// //console.log(avg);

// console.log(`An event happened, on average, every ${avg} minutes`);

// gameEvents.delete(64);
// //console.log(gameEvents);

// const events = new Set(gameEvents.values());
//console.log(events);
// const question = new Map([
//   ['question', 'whats the best coding language'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'try Again'],
// ]);

// console.log(question);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// const Answer = Number(prompt('your answer'));
// console.log(Answer);

// Answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// console.log(...question);
//console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());
//console.log(question.get('correct'));
// const rest = new Map();
// rest.set('name', 'hugos kictchen');
// rest
//   .set(1, 'italy')
//   .set(2, 'uk')
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'were are open')
//   .set(false, 'were are closed');
// console.log(rest.get('categories'));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// const arr = [1, 2];

// rest.set(arr, 'test');
// rest.set(document.querySelector('h1', 'heading'));

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pasta',
//   'pasta',
//   'pasta',
//   'rice',
// ]);

// console.log(ordersSet);

// console.log(ordersSet.size);
// console.log(ordersSet.has('bread'));
// console.log(ordersSet.has('pasta'));
// ordersSet.add('chocalate');
// ordersSet.add('chocalate');
// ordersSet.delete('pasta');
//ordersSet.clear();

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['waiter', 'waiter', 'waiter', 'chef', 'manager'];
// const staffset = new Set(staff);
// console.log(staffset);

// console.log(new Set('waiter', 'waiter', 'waiter', 'chef', 'manager').size);
// console.log(new Set('hugoo').size);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, l] of game.scored.entries()) {
//   console.log(`goal ${i + 1} : ${l}`);
// }

// let sum = 0;
// const values = Object.values(game.odds);
// console.log(values);
// for (const i of values) {
//   sum += i;
// }
// const average = sum / values.length;
// console.log(average);

// for (const i of values) {
//   console.log(`Odd of victory ${game.team1}: ${values[0]}
//   Odd of draw: ${values[1]}
//   Odd of victory ${game.team2}:  ${values[2]}`);
// }

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we opne at ${open} and close at ${close}`);
// }
// console.log(openingHours);
// console.log(restaurant.order1?.(0, 1) ?? 'no order avablie');

// const users = [{ Name: 'hugo', email: 'hello@jonas.io' }];

// console.log(users[0]?.Name ?? ' uesr name not there');

// console.log(restaurant.openingHours.mon?.open);

// const days = ['sun', 'tue', 'wed', 'mon'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   //console.log(`on ${day}, we open at ${open}`);
// }
// console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [item] of menu) // console.log(item);
// for (const [i, l] of menu.entries()) {
//   console.log(`${i + 1} : ${l}`);
// }

// console.log(...menu.entries());

// const rest1 = {
//   Name: 'capri',
//   numGuests: 20,
// };

// const rest2 = {
//   Name: 'la piazza',
//   owner: 'gio rossi',
// };

// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner &&= 'ANONYMOUS';
// rest1.owner = rest1.owner &&= 'ANONYMOUS';
// console.log(rest1);
// console.log(rest2);

// const { bob, openingHours, categories } = restaurant;
// console.log(bob, openingHours, categories);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , sec] = restaurant.categories;
// console.log(main, sec);

// const temp = main;
// main = sec;
// sec = temp;
// console.log(main, sec);

// [main, sec] = [sec, main];
// console.log(main, sec);

// const [starter, ma] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 3, [7, 5]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// const str = 'hugo';
// const letter = [...str, ' ', 's'];
// console.log(letter);

// const ingredients = [
//   prompt("let's make pasta! ingredient 1"),
//   prompt('ingredient 2'),
//   prompt('ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderpasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderpasta(...ingredients);

//const arr = [1,2 ...[3,4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, ...otherfood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) sum += num[i];
//   console.log(sum);
// };
// add(2, 3);
// add(2, 3, 4, 5, 5, 3, 6, 2, 5);

// const z = [2, 3, 5, 3];

// add(...z);

// restaurant.orderPizza('mushroom', 'susages', 'extra chesse');

// restaurant.orderPizza('mushroom');
// restaurant.numguests = 23;
// console.log(3 || 'hugo');
// console.log('' || 'hugo');
// console.log(true || 0);
// console.log(undefined || null);

// const guests1 = restaurant.numguests ? restaurant.numguests : 10;
// console.log(guests1);

// const guests2 = restaurant.numguests || 10;
// console.log(guests2);

// console.log(0 && 'hugo');
// console.log(7 && 'hugo');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('susage', 'chili flakse');
// }

// restaurant.orderPizza && restaurant.orderPizza('susage', 'chili flakse');

//null
// const guestsC = restaurant.numguests ?? 10;
// console.log(guestsC);

// ///////////////////////////mine
// const [gk1, ...fieldPlayers1] = game.players[0];
// // console.log(gk1, fieldPlayers1);
// const players1 = [gk1, fieldPlayers1];
// const [gk2, ...fieldPlayers2] = game.players[1];
// // console.log(gk2, fieldPlayers2);
// const players2 = [gk2, fieldPlayers2];

// console.log(players1);
// console.log(players2);

// const allplayers = [...game.players[0], ...game.players[1]];
// console.log(allplayers);

// const playersFinal = [...game.players[0], 'thiago', 'coutinho', 'perisic'];
// console.log(playersFinal);

// // odds: {
// //   team1: 1.33,
// //   x: 3.25,
// //   team2: 6.5,
// // },

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// const printgoals = function (...Name) {
//   for (let i = 0; i < Name.length; i++) console.log(`${Name} scored  `);
// };

// game.scored.printgoals(...);

///////////////////////////////////////////////1

// const [player1, players2] = game.players;
// console.log(player1, players2);

// //////2
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);
// //

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printgoals = function () {};

// printgoals('Davis');
