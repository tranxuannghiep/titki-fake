import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constant';
import { formatPrice } from 'ultils';

export default function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <Box padding={1}>
      <Link to={`/products/${product.id}`}>
        <Box padding={1} minHeight={215}>
          <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
      </Link>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" mr={1} fontSize="16px" fontWeight="bold">
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}
