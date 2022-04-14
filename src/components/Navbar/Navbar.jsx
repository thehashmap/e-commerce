import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button, TextField } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../../src/logo.svg';
import useStyles from './styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Navbar = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <AppBar initial="initial" position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
            <img src={logo} alt="e-commerce" height="25px" className={classes.image} />SuperShop
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton aria-label="Show cart items" color="inherit" className={classes.button}>
                <Badge badgeContent={'0'} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
            {!isLoggedIn && (
            <Button variant="contained" color="primary" onClick={handleClickOpen}>LogIn</Button>
            )}
            {isLoggedIn && (<Button variant="outlined" color="primary" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>LogOut</Button>)}
          </div>
        </Toolbar>
      </AppBar>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            className={classes.dialogBox}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent sx={{
                '& .MuiTextField-root': { m: 1, },
            }}>
                <DialogContentText>
                    Welcome Back!
                </DialogContentText>
                <TextField
                    autoFocus
                    id="name"
                    label="Email / Username"
                    type="email"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  );
};

export default Navbar;
