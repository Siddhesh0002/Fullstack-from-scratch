/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateByCat(items) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    const searchCat = result.find((y) => y.category == items[i].category);
    if (searchCat) {
      searchCat.totalSpent += items[i].price;
    } else {
      result.push({ category: items[i].category, totalSpent: items[i].price });
    }
  }
  return result;
}

const categories = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "NonFood",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 50,
    category: "Food",
    itemName: "Piz",
  },
];

console.log(calculateByCat(categories));
