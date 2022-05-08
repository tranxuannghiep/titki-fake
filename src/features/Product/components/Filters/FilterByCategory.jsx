import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import categoryApi from './../../../../api/categoryApi';
import { makeStyles } from '@mui/styles';
import FilterByCategorySkeleton from './FilterByCategorySkeleton';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      marginTop: theme.spacing(1),
      transition: 'all .25s',
      '&:hover': {
        // color: theme.palettte.primary.dark,
        cursor: 'pointer',
      },
    },
  },
}));

export default function FilterByCategory({ onChange }) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed', error);
      }
      setLoading(false);
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) onChange(category.id);
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      {loading ? (
        <FilterByCategorySkeleton />
      ) : (
        <ul className={classes.menu}>
          {categoryList.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}
