import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography, Box, LinearProgress } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import PasswordFiled from 'components/form-controls/PasswordFiled';
import InputFiled from 'components/form-controls/inputFiled';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: '#e91e63 !important',
  },
  title: {
    margin: theme.spacing(2, 0, 3),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    position: 'absolute !important',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'Please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at lease 6 characters'),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Box className={classes.title}>
        <Typography component="h3" variant="h5">
          Create An Account
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputFiled name="fullname" label="Full Name" form={form} />
        <InputFiled name="email" label="Email" form={form} />
        <PasswordFiled name="password" label="Password" form={form} />
        <PasswordFiled name="retypePassword" label="Retype Password" form={form} />
        <Box className={classes.submit}>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Create an account
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default RegisterForm;
