import React from 'react';
import { Box, TextareaAutosize } from '@mui/material';
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

export default function TextAreaFiled(props) {
  const classes = useStyles();
  const { form, name, disable, label } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Box className={classes.root}>
          <label>{label} :</label>
          <TextareaAutosize
            margin="normal"
            variant="outlined"
            minRows={4}
            onChange={onChange}
            value={value}
            disabled={disable}
            style={{ width: '100%', padding: 15, fontSize: 16 }}
          />
        </Box>
      )}
    />
  );
}
