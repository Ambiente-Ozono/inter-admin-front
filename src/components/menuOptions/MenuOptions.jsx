import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';


const settings = ['Login', 'Logout'];

function MenuOptions() {
  const [submenuClients, setSubmenuClients] = React.useState(null);
  const [userSettings, setUserSettings] = React.useState(null);
  const [submenuServices, setSubmenuServices] = React.useState(null);

  const handleOpenSubmenuClients = (event) => {
    setSubmenuClients(event.currentTarget);
  };
  const handleOpenSubmenuSettings = (event) => {
    setUserSettings(event.currentTarget);
  };
  const handleOpenSubmenuServices = (event) => {
    setSubmenuServices(event.currentTarget);
  }

  const handleCloseSubmenuClients = () => {
    setSubmenuClients(null);
  };
  const handleCloseSubmenuSettings = () => {
    setUserSettings(null);
  };
  const handleCloseSubmenuServices = () => {
    setSubmenuServices(null);
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
          <Box sx={{ flexGrow: 1 }}>
            <Button 
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleOpenSubmenuClients}
            >
                Clientes
            </Button>
            <Menu
              id="menu-appbar"
              sx={{ mt: '45px' }}
              anchorEl={submenuClients}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(submenuClients)}
              onClose={handleCloseSubmenuClients}
            >
                <MenuItem key='clients' onClick={handleCloseSubmenuClients}>
                    <Link to={"/clients"}>
                        <Typography textAlign="center">Listado de clientes</Typography>
                    </Link>
                </MenuItem>
            </Menu>
          </Box>
          {/* SERVICES */}

          <Box sx={{ flexGrow: 1 }}>
            <Button 
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleOpenSubmenuServices}
            >
                Servicios
            </Button>
            <Menu
              id="menu-appbar"
              sx={{ mt: '45px' }}
              anchorEl={submenuServices}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(submenuServices)}
              onClose={handleCloseSubmenuServices}
            >
                <MenuItem key='Services' onClick={handleCloseSubmenuClients}>
                    <Link to={"/services"}>
                        <Typography textAlign="center">Listado de servicios</Typography>
                    </Link>
                </MenuItem>
            </Menu>
          </Box>
          
          {/* END SERVICES */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenSubmenuSettings} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={userSettings}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userSettings)}
              onClose={handleCloseSubmenuSettings}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseSubmenuSettings}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MenuOptions;