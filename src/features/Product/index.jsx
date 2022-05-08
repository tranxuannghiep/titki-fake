import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function ProductFeature() {
  return (
    <Box pt={4}>
      <Outlet />
    </Box>
  );
}
