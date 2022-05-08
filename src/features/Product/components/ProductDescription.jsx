import React from 'react';
import DOMPurify from 'dompurify';
import { Paper } from '@mui/material';

export default function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: 16 }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}
