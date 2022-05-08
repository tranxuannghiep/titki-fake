import { Box } from '@mui/material';
import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
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

export default function ProductMenu() {
  const classes = useStyles();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Box component="ul" className={classes.root}>
        <li>
          <NavLink to={`${pathname}`} exact="true">
            Description
          </NavLink>
        </li>
        <li>
          <NavLink to={`${pathname}/additional`} exact="true">
            Additional Infomation
          </NavLink>
        </li>
        <li>
          <NavLink to={`${pathname}/reviews`} exact="true">
            Reviews
          </NavLink>
        </li>
      </Box>
      <Outlet />
    </>
  );
}
