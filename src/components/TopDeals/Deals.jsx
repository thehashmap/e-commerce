import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';

import Deal from './Product/Deal';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Headphones', description: 'Bluetooth Headphones', price: '75', rating: 4, discount: '75', image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    { id: 2, name: 'S21 Ultra', description: 'Samsung S21 Ultra', price: '69', rating: 3, discount: '60',image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'},
    { id: 3, name: 'Casual Shirt', description: 'Roadster Shirt', price: '55', rating: 4.5, discount: '69',image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'},
    { id: 4, name: 'Watch', description: 'Fossil Watch', price: '47', rating: 3.5, discount: '55', image: 'https://images.unsplash.com/photo-1589391943533-d6856910b7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9zc2lsJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
];

const Deals = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <div className={classes.show} spacing={4}>
            <Typography variant="h4" color="inherit" spacing={4}>
                Deals of the Day
            </Typography>
            <Button variant="outlined" color="primary">Show All</Button>
        </div>
        <Grid container spacing={4}>
            {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Deal product={product} />
            </Grid>
            ))}
        </Grid>
        
    </main>
  );
};

export default Deals;

