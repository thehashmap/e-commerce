import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from "@material-ui/core";
import useStyles from './styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Mail = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

  return (
    <main className={classes.content}>
        <Paper elevation={0}>
            <div className={classes.cardActions}>
                <Typography variant="h4" color="primary">Get notified about latest offers</Typography>
                <Typography variant="h6">Never miss an update!</Typography>
            </div>
            <div className={classes.email}>
                <TextField label="Email" variant="outlined" fullWidth={true} className={classes.input}/>
                <Button variant="contained" color="primary" onClick={handleClick} className={classes.button}>Subscribe</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Confirmation sent to your email!
                    </Alert>
                </Snackbar>
            </div>
        </Paper>
    </main>
  );
};

export default Mail;

