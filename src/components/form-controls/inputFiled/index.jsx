import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function InputFiled(props) {
  const { form, name, label, disable } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid} // check error
          helperText={error?.message} // show error
          onChange={onChange}
          value={value}
          disabled={disable}
        />
      )}
    />
  );
}
