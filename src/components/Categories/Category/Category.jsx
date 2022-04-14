import React from 'react';
import { Typography, Card, CardContent, IconButton} from '@material-ui/core';

import useStyles from './styles';

const Category = ({ category }) => {
  const classes = useStyles();
  const [raised, setRaised] = React.useState(false);

  return (
    <Card className={classes.root} onMouseOver={() => {setRaised(true)}} onMouseOut={() => {setRaised(false)}} raised={raised}>
        <CardContent className={classes.card}>
            <IconButton color="primary">
                {category.icon}
            </IconButton>
            <div className={classes.cardText}>
            <Typography gutterBottom variant="h5" component="h2">{category.name}</Typography>
            <Typography gutterBottom variant="h6" component="h2" color='primary'>{category.quantity} Products</Typography>
            </div>
        </CardContent>
    </Card>
  );
};

export default Category;

