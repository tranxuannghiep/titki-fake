import React, { useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { AccountCircle, Close } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { useSelector, useDispatch } from 'react-redux';
import { alpha, Menu, MenuItem, styled } from '@mui/material';
import { logout } from 'redux/action/userAction';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useSnackbar } from 'notistack';
import queryString from 'query-string';
const useStyle = makeStyles((theme) => ({
  root: {},
  closeButton: {
    position: 'absolute !important',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  minWidth: '500px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  color: '#fff',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
export default function Header() {
  const loggedInUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const refSearch = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogoutClick = () => {
    dispatch(logout());
    handleCloseMenu();
  };
  const handleAccountClick = () => {
    enqueueSnackbar('Chức năng này chưa được cập nhật', { variant: 'info' });
    handleCloseMenu();
  };

  const handleSearch = () => {
    // navigate('/products')
    const params = queryString.parse(location.search);
    const queryParmas = {
      ...params,
      name_contains: refSearch.current.value,
    };
    if (refSearch.current.value === '') {
      delete queryParmas.name_contains;
    }
    navigate(`/products?${queryString.stringify(queryParmas)}`);
  };
  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button onClick={() => navigate('/')}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                  alt=""
                  style={{ height: '40px' }}
                />
              </Button>
            </Typography>
          </Box>

          <Search>
            <SearchIconWrapper onClick={handleSearch}>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              inputRef={refSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              defaultValue={queryString.parse(location.search).name_contains || ''}
            />
          </Search>

          {!isLoggedIn && (
            <Button onClick={handleClickOpen} color="inherit">
              Login
            </Button>
          )}
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleAccountClick} disableRipple>
          My account
        </MenuItem>
        <MenuItem onClick={handleLogoutClick} disableRipple>
          Log out
        </MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={(_, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Allready have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
