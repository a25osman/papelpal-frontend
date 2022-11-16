import {groceryListUpdateAfterEdit} from './groceryListUpdate';
import {groceryListUpdateAfterDelete} from './groceryListUpdate';
import {groceryListUpdateAfterPurchase} from './groceryListUpdate';

const groceryList = [
  {id: 1, item: "apples", qty: 12, is_purchased: false},
  {id: 2, item: "sauce", qty: 2, is_purchased: false},
  {id: 3, item: "lettuce", qty: 1, is_purchased: true},
  {id: 4, item: "salt", qty: 1, is_purchased: false},
  {id: 5, item: "bread", qty: 2, is_purchased: false}
]

const updatedGroceryItem = {id: 3, item: "Cabbage", qty: 2, is_purchased: true}

test("testing the function: groceryListUpdateAfterEdit", () => {
  const updatedGroceryList = groceryListUpdateAfterEdit(updatedGroceryItem, groceryList);
  expect(updatedGroceryList[2].id).toEqual(3);
  expect(updatedGroceryList[2].item).toEqual("Cabbage");
  expect(updatedGroceryList[2].qty).toEqual(2);
  expect(updatedGroceryList[2].is_purchased).toEqual(true);
  expect(updatedGroceryList.length).toEqual(5);
});

test("testing the function: groceryListUpdateAfterDelete", () => {
  const updatedGroceryList = groceryListUpdateAfterDelete(5, groceryList);
  expect(updatedGroceryList.length).toEqual(4);
});

test("testing the function: groceryListUpdateAfterPurchase", () => {
  const updatedGroceryList = groceryListUpdateAfterPurchase(1, groceryList);
  expect(updatedGroceryList[0].is_purchased).toEqual(true);
});