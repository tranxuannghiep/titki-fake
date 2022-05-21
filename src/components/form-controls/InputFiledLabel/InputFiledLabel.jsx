import React from 'react';
import { Box, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    '& > label': {
      minWidth: '300px',
    },
  },
}));
export default function InputFiledLabel(props) {
  const classes = useStyles();
  const { form, name, disable, label } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
        <Box className={classes.root}>
          <label>{label} :</label>
          <TextField
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
            error={invalid} // check error
            helperText={error?.message} // show error
            onChange={onChange}
            value={value}
            disabled={disable}
          />
        </Box>
      )}
    />
  );
}
