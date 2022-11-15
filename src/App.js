import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import { Box } from '@mui/material';
import axios from "axios";

function App() {
  const [groceryList, setGroceryList] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/groceries`, {}, {withCredentials: true})
      .then(res => {
        setGroceryList([...res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <Box>
      <Form />
      <GroceryList list={groceryList} />
    </Box>
  );
}

export default App;
