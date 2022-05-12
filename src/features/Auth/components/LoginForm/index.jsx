import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography, Box, LinearProgress } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import InputFiled from 'components/form-controls/inputFiled';
import PasswordFiled from 'components/form-controls/PasswordFiled';

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

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
          Sign in
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputFiled name="identifier" label="Email" form={form} />
        <PasswordFiled name="password" label="Password" form={form} />
        <Box className={classes.submit}>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign in
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LoginForm;
