import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { formatPrice } from 'ultils';

const useStyles = makeStyles((theme) => ({
  root: {},

  description: {
    margin: theme.spacing(2, 0),
  },
  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    width: 'fit-content',
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: '500',
    '&.sale-color': {
      color: '#ff424e',
    },
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
    color: '#808089',
  },
  promotionPercent: {
    border: '1px solid #ff424e',
    color: '#ff424e',
    padding: theme.spacing(0.25),
    backgroundColor: '#fff0f1',
  },
}));
export default function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Box className={classes.description}>
        <Typography variant="body2">{shortDescription}</Typography>
      </Box>
      <Box className={classes.priceBox}>
        <Box
          component="span"
          className={`${classes.salePrice} ${promotionPercent > 0 ? 'sale-color' : ''} `}
        >
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box
              component="span"
              className={classes.promotionPercent}
            >{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}
