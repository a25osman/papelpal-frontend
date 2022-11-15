import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import {Paper, IconButton} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Form = ({groceryList, setGroceryList}) => {
    const [groceryItem, setGroceryItem] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault();
        // window.location.reload(false);
        const res = await axios.post(
            `http://localhost:3001/api/groceries/`,
            { groceryItem },
            { withCredentials: true }
        );
        
        const id = res.data.rows[0].id
        setGroceryList([...groceryList, { id, item: groceryItem, qty: 1, is_purchased: false }]);
        setGroceryItem("");
    };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx = {{
        borderRadius:20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: 'none',
        mr: {sm:50}
      }}
    >
      <input 
        className="item-field"
        placeholder="Grocery..."
        value={groceryItem}
        onChange={(e) => setGroceryItem(e.target.value)}
      />
      <IconButton type="submit" sx={{p:'10px', color: 'red' }}> 
        <AddOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

export default Form