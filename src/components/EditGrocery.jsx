import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {groceryListUpdateAfterEdit} from '../helpers/groceryListUpdate';

const EditGrocery = ({handleClose, id, item, qty, groceryList, setGroceryList}) => {
    // This component allows users update grocery item description and qty
    const [updatedItem, setUpdatedItem] = useState(item);
    const [updatedQty, setUpdatedQty] = useState(qty);

    const handleSubmit = async (event) => {
        // updates information in state and database
        event.preventDefault();
        if (!updatedItem || /^\s*$/.test(updatedItem) || updatedItem.length > 20 || !updatedQty || isNaN(updatedQty) || updatedQty < 0 || updatedQty > 1000) {
            return;
        }
        
        const res = await axios.put(
            `http://localhost:3001/api/groceries/${id}`,
            { item: updatedItem, qty: updatedQty },
            { withCredentials: true }
        );
        const updatedGroceryItem = res.data.rows[0];
        setGroceryList(groceryListUpdateAfterEdit(updatedGroceryItem, groceryList));
        handleClose();
    }

    return (
        <>
            <IconButton sx={{ position: "absolute", top: "0", right: "0" }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            
            <Stack spacing={3} component="form" onSubmit={handleSubmit} justifyContent="center" alignItems="center">
                <Typography  variant="h4">
                    Make your changes!
                </Typography>
                <TextField
                id="outlined-basic"
                label="Update Item (max 20 char)"
                variant="outlined"
                placeholder="Enter a new item"
                value={updatedItem}
                onChange={(event) => setUpdatedItem(event.target.value)}
                />
                <TextField
                id="outlined-basic"
                label="Update Quantity (max 1000)"
                variant="outlined"
                placeholder="Enter a positive integer"
                value={updatedQty}
                onChange={(event) => setUpdatedQty(event.target.value)}
                />
                <Button type="submit" variant="contained">
                    Update!
                </Button>
            </Stack>
        </>
    )
}

export default EditGrocery