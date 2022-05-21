import React from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 0 8px',
    '& > label': {
      minWidth: '300px',
    },
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectFiled(props) {
  const classes = useStyles();
  const { form, name, disable, label, items } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Box className={classes.root}>
          <label>{label} :</label>

          <Select
            size="small"
            fullWidth
            MenuProps={MenuProps}
            onChange={onChange}
            value={value}
            disabled={disable}
          >
            {items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    />
  );
}
