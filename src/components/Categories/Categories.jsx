import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WatchIcon from '@mui/icons-material/Watch';
import Category from './Category/Category';

import useStyles from './styles';

const categories = [
    {id: 1, name: 'Laptops', quantity: '700k', icon: <LaptopMacIcon />},
    {id: 2, name: 'Headphones', quantity: '650K', icon: <HeadphonesIcon />},
    {id: 3, name: 'Fitness', quantity: '550K', icon: <FitnessCenterIcon />},
    {id: 4, name: 'Watches', quantity: '300K', icon: <WatchIcon />},
]

const Categories = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <div className={classes.show} spacing={4}>
            <Typography variant="h4" color="inherit" spacing={4}>
                Top Categories
            </Typography>
            <Button variant="outlined" color="primary">Show All</Button>
        </div>
        <Grid container spacing={4}>
            {categories.map((category) => (
                <Grid key={category.id} item xs={12} sm={6} md={4} lg={3}>
                    <Category category={category}/>
                </Grid>
            ))}
        </Grid>
        
    </main>
  );
};

export default Categories;

