import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {groceryListUpdate} from '../helpers/groceryListUpdate';

const EditGrocery = ({handleClose, id, item, qty, groceryList, setGroceryList}) => {
    const [updatedItem, setUpdatedItem] = useState(item);
    const [updatedQty, setUpdatedQty] = useState(qty);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!updatedItem || /^\s*$/.test(updatedItem) || !updatedQty || isNaN(updatedQty) || updatedQty < 0) {
            return;
        }
        
        const res = await axios.put(
            `http://localhost:3001/api/groceries/${id}`,
            { item: updatedItem, qty: updatedQty },
            { withCredentials: true }
        );
        const updatedGroceryItem = res.data.rows[0];
        setGroceryList(groceryListUpdate(updatedGroceryItem, groceryList));
        handleClose();
    }

    return (
        <>
            <IconButton sx={{ position: "absolute", top: "0", right: "0" }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <Stack spacing={2} component="form" onSubmit={handleSubmit} justifyContent="center" alignItems="center">
                <TextField
                id="outlined-basic"
                label="Update Item"
                variant="outlined"
                placeholder="Enter a new item"
                value={updatedItem}
                onChange={(event) => setUpdatedItem(event.target.value)}
                />
                <TextField
                id="outlined-basic"
                label="Update Quantity"
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