import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function PasswordFiled(props) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  const { form, name, label, disable } = props;
  const {
    control,
    formState: { errors },
  } = form;
  return (
    <FormControl
      error={Boolean(errors[name]?.message)}
      margin="normal"
      variant="outlined"
      fullWidth
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { invalid } }) => (
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            error={invalid}
            onChange={onChange}
            value={value}
            disabled={disable}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}
