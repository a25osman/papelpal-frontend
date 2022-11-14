import React from 'react'

const GroceryList = (props) => {
  return (
    <>
        <div>GroceryList</div>
        <div>
            {props.list.map((item, idx) => {
                return (
                    <h1 key={idx}> {item} </h1>
                )
            })}
        </div>
    </>
  )
}

export default GroceryList