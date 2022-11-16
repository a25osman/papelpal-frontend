export function groceryListUpdateAfterEdit(updatedGroceryItem, groceryList) {
  // This function is used to update state with new item description and qty after user submits edits 
  const updatedGroceryList = [];
  for (let groceryItem of groceryList) {
    if (groceryItem.id === updatedGroceryItem.id) {
      updatedGroceryList.push(updatedGroceryItem);
    } else {
      updatedGroceryList.push(groceryItem);
    }
  }

  return updatedGroceryList;
}


export function groceryListUpdateAfterDelete(id, groceryList) {
  // This function is used to delete a grocery item from state clicks delete button
  const updatedGroceryList = [];
  for (let groceryItem of groceryList) {
    if (id === groceryItem.id) {
      // pass;
    } else {
      updatedGroceryList.push(groceryItem);
    }
  }

  return updatedGroceryList;
}

export function groceryListUpdateAfterPurchase(id, groceryList) {
  // This function is used to mark a grocery item as purchased in the state, after user clicks on item
  const updatedGroceryList = [];
  for (let groceryItem of groceryList) {
    if (id === groceryItem.id) {
      groceryItem.is_purchased = !groceryItem.is_purchased;
      updatedGroceryList.push(groceryItem);
    } else {
      updatedGroceryList.push(groceryItem);
    }
  }

  return updatedGroceryList;
}
  