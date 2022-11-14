import './App.css';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Form from './components/Form';
import GroceryList from './components/GroceryList';


function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(["milk", "eggs", "bread", "tuna"])
  
  }, [])
  
  return (
    <Box>
      <Form />
      <GroceryList list={list} />
    </Box>
  );
}

export default App;
