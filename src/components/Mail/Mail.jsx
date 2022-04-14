import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from "@material-ui/core";
import useStyles from './styles';
import { CallTwoTone } from '@mui/icons-material';


const Mail = () => {

    const classes = useStyles();

  return (
    <main className={classes.content}>
        <Paper elevation={0}>
            {/* <img 
                className={classes.media}
                src="https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            /> */}
            <div className={classes.cardActions}>
                <Typography variant="h4" color="primary">Get notified about latest offers</Typography>
                <Typography variant="h6">Never miss an update</Typography>
            </div>
            <div className={classes.email}>
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} color='primary' className={classes.input}/>
                <Button variant="contained" color="primary" className={classes.button}>Subscribe</Button>
            </div>
        </Paper>
    </main>
  );
};

export default Mail;

// import React from 'react';
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, TextField, Button, Box } from '@material-ui/core';
// import Rating from '@mui/material/Rating';
// import { AddShoppingCart, FavoriteBorder } from '@material-ui/icons';

// import useStyles from './styles';

// const Mail = () => {
//   const classes = useStyles();
//   const img = "https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";


//   return (
//     <Card sx={{ display: 'flex' }} className={classes.root}>
//       <CardMedia className={classes.media} image={img}/>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent >
//         <div className={classes.cardContent}>
//             <Typography variant="h3">Subscribe to our Newsletter to get latest offers</Typography>
//             <Typography variant="h5">Never miss an update</Typography>
//             <TextField id="outlined-basic" label="Email" variant="outlined" />
//             <Button>Subscribe</Button>
//         </div>
//         </CardContent>
//       </Box>
//     </Card>
//   );
// };

// export default Mail;

