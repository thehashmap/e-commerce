import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from "@material-ui/core";
import useStyles from './styles';


const Mail = () => {

    const classes = useStyles();

  return (
    <main className={classes.content}>
        <Paper elevation={0}>
            <div className={classes.cardActions}>
                <Typography variant="h4" color="primary">Get notified about latest offers</Typography>
                <Typography variant="h6">Never miss an update</Typography>
            </div>
            <div className={classes.email}>
                <TextField label="Email" variant="outlined" fullWidth={true} className={classes.input}/>
                <Button variant="contained" color="primary" className={classes.button}>Subscribe</Button>
            </div>
        </Paper>
    </main>
  );
};

export default Mail;

