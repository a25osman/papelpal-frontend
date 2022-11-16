import React from 'react'
import GroceryItem from './GroceryItem';
import Grid from '@mui/material/Grid';


const GroceryList = ({groceryList, setGroceryList}) => {
  // This component renders each and every grocery item
    
  return (
    <Grid sx={{bgcolor:'background.paper', marginRight: '200px'}} container spacing={3} justifyContent="center" alignItems="center">
      {groceryList.map((groceryItem, index) => {
        return (
            <Grid item xs={7} sm={7} md={4} xl={3} key={groceryItem.id}>
              <GroceryItem
                index={index}
                item={groceryItem.item}
                id={groceryItem.id}
                qty={groceryItem.qty}
                is_purchased={groceryItem.is_purchased}
                groceryList = {groceryList}
                setGroceryList = {setGroceryList}
              />
            </Grid>
        );
      })}
    </Grid>
  )
}

export default GroceryList