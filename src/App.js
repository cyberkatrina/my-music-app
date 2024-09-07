import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect} from 'react';
import Dashboard from './components/Dashboard'

function App() {

  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <Box>
        <AppBar position="static">
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Music App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
      {!login ? 
      <div>
        <TextField id="standard-basic" label="Username" required variant="standard" />
        <br></br>
        <TextField id="standard-basic" label="Password" required variant="standard" />
        <br></br><br></br>
        <Button variant="contained" onClick={() => setLogin(true)}>Login</Button>
      </div>
      :
      <Dashboard></Dashboard>}
    </div>

  )
}


export default App;
