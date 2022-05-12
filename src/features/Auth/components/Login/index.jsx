import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { login } from 'redux/action/userAction';
import LoginForm from '../LoginForm';
function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      await dispatch(login(values));
      const { closeDialog } = props;
      if (closeDialog) closeDialog();
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    console.log('Form submit', values);
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
