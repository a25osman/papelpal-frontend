import React from 'react'
import { useState } from 'react';
import EditGrocery from './EditGrocery';

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

const GroceryItem = ({id, item, qty, is_purchased, groceryList, setGroceryList}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{height: "100%", boxShadow: 4}}>
            <CardActionArea>
                <CardContent onClick={()=>console.log("heloooo")}>
                    <Typography variant="h5" component="div">
                        {item}
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        category
                    </Typography> */}
                    <Typography variant="h6">
                        x10
                        <br />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton size="small" onClick={handleOpen}>
                    <EditIcon sx={{ color: "#1976D2", fontSize:40  }} color="primary" />
                </IconButton>
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
                <IconButton size="small" color="primary">
                    <DeleteIcon sx={{color: 'red', fontSize: 40}} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default GroceryItem