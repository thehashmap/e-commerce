import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { AddShoppingCart, FavoriteBorder } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
  const [raised, setRaised] = React.useState(false);

  return (
    <Card className={classes.root} onMouseOver={() => {setRaised(true)}} onMouseOut={() => {setRaised(false)}} raised={raised}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹ {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Rating name="half-rating" defaultValue={product.rating} precision={0.5} />
        <IconButton aria-label="Favorite" className={classes.favorite}>
          <FavoriteBorder />
        </IconButton>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

