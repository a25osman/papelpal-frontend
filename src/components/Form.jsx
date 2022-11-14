import React from 'react'
import { useState } from 'react'
import {Paper, IconButton} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Form = () => {
    const [value, setValue] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit" sx={{p:'10px', color: 'red' }}> 
        <AddOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

export default Form