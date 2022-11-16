export function groceryListUpdateAfterEdit(updatedGroceryItem, groceryList) {

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


export function groceryListUpdateAfterDelete(id, groceryList) {

  const updatedGroceryList = [];
  for (let groceryItem of groceryList) {
    if (id == groceryItem.id) {
      // pass;
    } else {
      updatedGroceryList.push(groceryItem);
    }
  }

  return updatedGroceryList;
}

export function groceryListUpdateAfterPurchase(id, groceryList) {

  const updatedGroceryList = [];
  for (let groceryItem of groceryList) {
    if (id == groceryItem.id) {
      groceryItem.is_purchased = !groceryItem.is_purchased;
      updatedGroceryList.push(groceryItem);
    } else {
      updatedGroceryList.push(groceryItem);
    }
  }

  return updatedGroceryList;
}
  