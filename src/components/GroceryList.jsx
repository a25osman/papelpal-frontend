import React from 'react'
import GroceryItem from './GroceryItem';
import Grid from '@mui/material/Grid';


const GroceryList = ({groceryList, setGroceryList}) => {
    
  return (
    <Grid sx={{bgcolor:'background.paper'}} container spacing={2} justifyContent="center" alignItems="center">
      {groceryList.map((groceryItem) => {
        return (
            <Grid item xs={7} sm={7} md={4} xl={3} key={groceryItem.id}>
              <GroceryItem
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