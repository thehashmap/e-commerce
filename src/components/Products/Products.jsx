import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Nike Running Shoes', price: '2499', rating: 4.5, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'},
    { id: 2, name: 'Speaker', description: 'JBL Bluetooth Speaker', price: '1199', rating: 4.5, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'},
    { id: 3, name: 'Sofa', description: 'Ikea Wooden Sofa', price: '9999', rating: 4, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    { id: 4, name: 'Mac', description: 'Apple Macbook Pro', price: '109499', rating: 4, image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80'},
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <div className={classes.show} spacing={4}>
            <Typography variant="h4" color="inherit" spacing={4}>
                Best Sellers
            </Typography>
            <Button variant="outlined" color="primary">Show All</Button>
        </div>
        <Grid container spacing={4}>
            {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
            ))}
        </Grid>
        
    </main>
  );
};

export default Products;

