'use strict';

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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderpasta: function (ing1, ing2, ing3) {
    console.log(`heres is your pasta made with ${ing1} ,${ing2} and ${ing3}.`);
  },

  orderPizza: function (mainIngreient, ...otherings) {
    console.log(mainIngreient);
    console.log(otherings);
  },
};
const rest1 = {
  Name: 'capri',
  numGuests: 20,
};

const rest2 = {
  Name: 'la piazza',
  owner: 'gio rossi',
};

const { bob, openingHours, categories } = restaurant;
console.log(bob, openingHours, categories);

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
