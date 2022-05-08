import React from 'react';
import {
  FormControl,
  Typography,
  Box,
  OutlinedInput,
  FormHelperText,
  IconButton,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px',
    margin: theme.spacing(2, 0),
  },
}));

export default function QuantityFiled(props) {
  const classes = useStyles();
  const { form, name, label, disable } = props;
  const {
    control,
    formState: { errors },
    setValue,
  } = form;
  return (
    <FormControl margin="normal" variant="outlined" fullWidth size="small">
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <Box className={classes.box}>
            <Box>
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) && Number.parseInt(value) > 1
                      ? Number.parseInt(value) - 1
                      : 1
                  )
                }
              >
                <RemoveCircleOutline />
              </IconButton>
            </Box>
            <OutlinedInput
              id={name}
              inputMode="numeric"
              disabled={disable}
              value={value}
              onChange={onChange}
            />
            <Box>
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}
