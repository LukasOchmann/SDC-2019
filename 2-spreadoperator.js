const fruits = ['Appel', 'Orange', 'Banana'];
const vegis = ['Potato', 'Onion', 'Paprika'];

/**
 *
 * @param {Array} items array fo all items to buy
 */
function putAllItems(items) {
  // just do someting with the items
  console.log(items);
  return items;
}

let items = [];
for (let fruit in fruits) {
  items.push(fruits[fruit]);
}
for (let vegi in vegis) {
  items.push(vegis[vegi]);
}

putAllItems([...vegis, ...fruits]);
