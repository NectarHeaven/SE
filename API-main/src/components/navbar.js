import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        API
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Login">
              <ListItemText sx={{ textAlign: 'center ' }}> logins </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Category1" >
               <ListItemText  sx={{ textAlign: 'center ' }}> Category1 </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Category2">
               <ListItemText  sx={{ textAlign: 'center ' }}> category2 </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Category3">
               <ListItemText  sx={{ textAlign: 'center ' }}> category3 </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#b7202e" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            align='left'
            variant="h6"
            component={Link} to="/"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color:'white', textDecoration:'none' }}
          >
            API
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Button component={Link} to="/Login"  sx={{ color: '#fff' }}>
                Login
              </Button>
              <Button component={Link} to="/Category1"  sx={{ color: '#fff' }}>
                Category1
              </Button>
              <Button component={Link} to="/Category2"  sx={{ color: '#fff' }}>
                Category2
              </Button>
              <Button component={Link} to="/Category3"  sx={{ color: '#fff' }}>
                Category3
              </Button>

          </Box>
        </Toolbar>
      </AppBar>
      <nav >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>        
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
