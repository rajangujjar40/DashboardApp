import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import {
  Box,
  SwipeableDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  InputBase,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
  useMediaQuery
} from '@mui/material';
import {
  Home as HomeIcon,
  InsertChartOutlined as InsertChartOutlinedIcon,
  AssignmentTurnedInOutlined as AssignmentTurnedInOutlinedIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  ShoppingBagOutlined as ShoppingBagOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  WidgetsOutlined as WidgetsOutlinedIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  AccountCircle,
  EmailOutlined as EmailOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  MoreVert as MoreIcon,
  SettingsOutlined as SettingsOutlinedIcon
} from '@mui/icons-material';

const drawerWidth = 180;


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: "1px solid #5a5a5f",
  borderRadius: '6px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  position: 'fixed',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: theme.zIndex.drawer,
  width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Sidenav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0)
  const [logClicked, setLogClicked] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMobileDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleListItemClick = (index) => {
    setSelectedItem(index);
    setLogClicked(false);
  };

  const handleLogOutClick = () => {
    setLogClicked(true);
    setSelectedItem(56);
  };

  const sideItems = [
    { sideItemName: 'Home', icon: <HomeIcon sx={selectedItem === 0 && { color: "#818cff" }} /> },
    { sideItemName: 'Statics', icon: <InsertChartOutlinedIcon sx={selectedItem === 1 && { color: "#818cff" }} /> },
    { sideItemName: 'CheckSheet', icon: <AssignmentTurnedInOutlinedIcon sx={selectedItem === 2 && { color: "#818cff" }} /> },
    { sideItemName: 'Wallet', icon: <AccountBalanceWalletOutlinedIcon sx={selectedItem === 3 && { color: "#818cff" }} /> },
    { sideItemName: 'Orders', icon: <ShoppingBagOutlinedIcon sx={selectedItem === 4 && { color: "#818cff" }} /> }
  ]

  const drawer = (
    <Box sx={{
      width: drawerWidth,
      height: '100%',
      background: '#202028',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: '#9f9fa0' }}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sideItems.map((text, index) => (
          <ListItem key={index} disablePadding onClick= {() => handleListItemClick(index)}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color: 'white',
                borderLeft: index === selectedItem ? '3px solid #818cff' : 'none',
                color: index === selectedItem ? "#818cff" : '#9f9fa0',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#9f9fa0',
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.sideItemName} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ marginTop: 'auto' }}>
        <List>
          {['LogOut'].map((text, index) => (
            <ListItem key={index} disablePadding onClick={() => handleLogOutClick()}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderLeft: logClicked ? '3px solid red' : 'none',
                  color: logClicked ? "red" : '#9f9fa0'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: logClicked ? 'red' : '#9f9fa0',
                  }}
                >
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>

  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: '#202028', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: 'none' }),
            }}
          >
            <WidgetsOutlinedIcon sx={{ color: '#818cff' }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <IconButton size="medium" color="inherit" sx={{ backgroundColor: 'rgba(85, 86, 91, 0.5)', borderRadius: '100px' }}>
              <Badge >
                <EmailOutlinedIcon sx={{color:"#9f9fa0"}} />
              </Badge>
            </IconButton>
            <IconButton size="medium" color="inherit" sx={{ backgroundColor: 'rgba(85, 86, 91, 0.5)', borderRadius: '100px' }}>
              <Badge >
                <SettingsOutlinedIcon sx={{color:"#9f9fa0"}} />
              </Badge>
            </IconButton>
            <IconButton size="medium" color="inherit" sx={{ backgroundColor: 'rgba(85, 86, 91, 0.5)', borderRadius: '100px' }}>
              <Badge variant="dot" color="primary" badgeContent=" " overlap="circular" >
                <NotificationsOutlinedIcon sx={{color:"#9f9fa0"}} />
              </Badge>
            </IconButton>
            <Avatar src='/images/avatarimg1.jpg' />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="show more" aria-controls="primary-search-account-menu-mobile" aria-haspopup="true" color="inherit">
              <MoreIcon sx={{color:"#9f9fa0"}} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open}>
        {drawer}
      </Drawer>
      <SwipeableDrawer
        sx={{
          '& .MuiDrawer-paper': {
            position: 'fixed',
            height: '100%',
            top: 0,
            left: 0,
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#202028',
          },
        }}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onOpen={handleMobileDrawerOpen}
        onClose={handleMobileDrawerClose}
      >
        {drawer}
      </SwipeableDrawer>
    </Box>
  );
};

export default Sidenav;
