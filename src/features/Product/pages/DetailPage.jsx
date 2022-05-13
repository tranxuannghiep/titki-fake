import React from 'react';
import { Box, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams, Routes, Route } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import useProductDetail from '../hooks/useProductDetail';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/action/cartAction';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
  loading: {
    width: 500,
    margin: 'auto',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

export default function DetailPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product, loading } = useProductDetail(productId);
  if (loading)
    return (
      <Box className={classes.loading}>
        <Typography textAlign="center" marginBottom="10px">
          Loading
        </Typography>
        <LinearProgress />
      </Box>
    );

  const handleAddtoCartSubmit = (values) => {
    const { quantity } = values;
    dispatch(addToCart({ ...product, quantity: quantity }));
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddtoCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <Routes>
          <Route path="" element={<ProductMenu id={product.id} />}>
            <Route index element={<ProductDescription product={product} />} />
            <Route path="/additional" element={<ProductAdditional />} />
            <Route path="/reviews" element={<ProductReviews />} />
          </Route>
        </Routes>
      </Container>
    </Box>
  );
}
