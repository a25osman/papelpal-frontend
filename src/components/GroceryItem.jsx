import React from 'react'
import { useState } from 'react';
import axios from 'axios'

import EditGrocery from './EditGrocery';
import {groceryListUpdateAfterDelete} from '../helpers/groceryListUpdate';
import {groceryListUpdateAfterPurchase} from '../helpers/groceryListUpdate';


import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tooltip from '@mui/material/Tooltip';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const colors = ["fuchsia", "lime", "aqua", "darkred", "goldenrod", "royalblue", "mediumspringgreen", "purple"]

const GroceryItem = ({id, index, item, qty, is_purchased, groceryList, setGroceryList}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = async () => {
        await axios.delete(
            `http://localhost:3001/api/groceries/${id}`,
            { },
            { withCredentials: true }
        );
        setGroceryList(groceryListUpdateAfterDelete(id, groceryList));
    }

    const handlePurchase = async () => {
        await axios.put(
            `http://localhost:3001/api/groceries/${id}/complete`,
            { is_purchased },
            { withCredentials: true }
        );
        setGroceryList(groceryListUpdateAfterPurchase(id, groceryList));
    }

    return (
        <Card sx={{
            height: "100%",
            boxShadow: 4,
            opacity: is_purchased ? "35%" : '100%',
            borderRadius: 10,
            border: "1px solid #e3e3e3",
        }}>
            <CardActionArea sx={{
                height: '200px',
                bgcolor: is_purchased ? "lightgrey" : index < colors.length ? colors[index] : colors[index % colors.length]  
                }}
                onClick={handlePurchase}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <CardContent>
                        <Typography variant="h5" sx={{wordBreak: "break-word", fontSize:40, color: is_purchased ? 'black' : 'white', fontWeight: 'bold', textDecoration : is_purchased ? 'line-through' : 'none'}} >
                            {item}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{fontSize:40, color: is_purchased ? 'black' : 'white'}} >
                            x{qty}
                        </Typography>
                    </CardContent>
                </Grid>
            </CardActionArea>
            <CardActions sx={{}}>
                <Grid container justifyContent="right" alignItems="center">
                    <Tooltip title="Edit">
                    <IconButton size="small" onClick={handleOpen}>
                        <EditIcon sx={{ color: "#1976D2", fontSize:40  }} color="primary" />
                    </IconButton>
                </Tooltip>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <EditGrocery item={item} id={id} qty={qty} is_purchased={is_purchased} groceryList={groceryList} setGroceryList={setGroceryList} handleClose={handleClose} />
                    </Box>
                </Modal>
                <Tooltip title="Delete" arrow>
                    <IconButton size="small" color="primary" onClick={handleDelete}>
                        <DeleteIcon sx={{color: 'red', fontSize: 40}} />
                    </IconButton>
                </Tooltip>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default GroceryItem