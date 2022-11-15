export function groceryListUpdate(updatedGroceryItem, groceryList) {

  const updatedGroceryList = [];
  for (let groceryItem of groceryList) {
    if (groceryItem.id == updatedGroceryItem.id) {
      updatedGroceryList.push(updatedGroceryItem);
    } else {
      updatedGroceryList.push(groceryItem);
    }
  }

  return updatedGroceryList;
}
  