import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import {IconButton, Grid, TextField} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InputAdornment from "@mui/material/InputAdornment";


const Form = ({groceryList, setGroceryList}) => {
    // This component is a form for which, on submission, creates adds new grocery items
    const [groceryItem, setGroceryItem] = useState("");

    const handleSubmit = async (event) => {
      // on submission, the new grocery items are added to database and updated in the state.
        event.preventDefault();
        if (!groceryItem || /^\s*$/.test(groceryItem)) {
          return;
      }
        const res = await axios.post(
            `http://localhost:3001/api/groceries/`,
            { groceryItem },
            { withCredentials: true }
        );
        
        const id = res.data.rows[0].id
        setGroceryList([{ id, item: groceryItem, qty: 1, is_purchased: false }, ...groceryList]);
        setGroceryItem("");
    };

  return (
    <Grid component="form" onSubmit={handleSubmit} container justifyContent="center" alignItems="center">
      <TextField
        placeholder="Enter grocery here..."
        value={groceryItem}
        onChange={(event) => setGroceryItem(event.target.value)}
        variant="filled"
        sx={{mt:'30px', mb:'30px', width:"80%"}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type='submit' edge="end" color="primary">
                <AddOutlinedIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Grid>
  )
}

export default Form