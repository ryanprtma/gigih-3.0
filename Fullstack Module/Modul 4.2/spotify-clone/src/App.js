import './App.css';

import { CssBaseline, Box } from '@mui/material';

import Player from './components/Player';
import { NavBar } from './components/NavBar';
import { ResponsiveDrawer } from './components/ResponsiveDrawer';

import HomePage from './pages/HomePage';

export function App() {
  const drawerWidth = 540;

  return (
    <div className="App">
      <Box sx={{ display: 'flex', backgroundColor: 'black', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <ResponsiveDrawer />
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, minHeight: '100vh' }}
        >
          <NavBar />
          <HomePage />
        </Box>
        <Player />
      </Box >
    </div >
  );
}

export default App;
