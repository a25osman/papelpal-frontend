import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import GroceryList from './components/GroceryList';
import Form from './components/Form';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [groceryList, setGroceryList] = useState([])
  
  useEffect(() => {
    // This api call is used to retrive all grocery items from database
    axios
      .get(`http://localhost:3001/api/groceries`, {}, {withCredentials: true})
      .then(res => {
        setGroceryList([...res.data]);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <Stack spacing={2} sx={{mt: "3%"}} direction="column" justifyContent="center" alignItems="center">
      <ThemeProvider theme={theme}>
        <Typography  variant="h1">
          PaperPal
        </Typography>
        <Typography variant="caption">
          Never miss another grocery again.
        </Typography>
      </ThemeProvider>
      <Form groceryList={groceryList} setGroceryList={setGroceryList} />
      <GroceryList groceryList={groceryList} setGroceryList={setGroceryList}/>
    </Stack>
  );
}

export default App;
