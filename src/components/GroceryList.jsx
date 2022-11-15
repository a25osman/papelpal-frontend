import React from 'react'

const GroceryList = ({groceryList, setGroceryList}) => {
  return (
    <>
        <div>GroceryList</div>
        <div>
            {groceryList.map((groceryItem, idx) => {
                return (
                    <h1 key={idx}> {groceryItem.item} </h1>
                )
            })}
        </div>
    </>
  )
}

export default GroceryList