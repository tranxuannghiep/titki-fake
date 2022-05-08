import { Box } from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    listStyleType: 'none',
    '& > li': {
      padding: theme.spacing(2, 4),
    },
    '& > li > a': {
      color: theme.palette.grey[700],
      textDecoration: 'none',
    },
    '& > li > a.active': {
      color: '#3498db',
      textDecoration: 'underline',
    },
    '& > li > a:hover': {
      color: '#3498db',
      textDecoration: 'underline',
    },
  },
}));

export default function ProductMenu({ id }) {
  const classes = useStyles();
  return (
    <>
      <Box component="ul" className={classes.root}>
        <li>
          <NavLink to={`/products/${id}`} end>
            Description
          </NavLink>
        </li>
        <li>
          <NavLink to={`/products/${id}/additional`}>Additional Infomation</NavLink>
        </li>
        <li>
          <NavLink to={`/products/${id}/reviews`}>Reviews</NavLink>
        </li>
      </Box>
      <Outlet />
    </>
  );
}
