const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

// Q1
const cheapestItem = item.reduce((first, second) =>
  first.price < second.price ? first : second
);
console.log(
  "Q1.The product that will be bought when you don't have much money:"
);
console.log(cheapestItem.name + " with price of :" + cheapestItem.price);

// Q2
const expensiveItem = item.reduce((first, second) =>
  first.price > second.price ? first : second
);
console.log("Q2. The product that will be expensive in the array:");
console.log(expensiveItem.name + " with price of: " + expensiveItem.price);

// Q3
let total1 = 0;
item.forEach((values) => {
  total1 += values.price;
});
console.log("Q3. The full price of all product combined is: " + total1);

// Q4
let total2 = 0;
item.forEach((values) => {
  if (values.price >= 10) {
    total2 += values.price;
  }
});
console.log(
  "Q4. full price of all product combined except the ones under 10 dollar is: " +
    total2
);
