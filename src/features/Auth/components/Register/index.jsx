import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { useSnackbar } from 'notistack';
import { register } from 'redux/action/userAction';
function Register() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      await dispatch(register(values));
      enqueueSnackbar('Register successfully!!!', { variant: 'success' });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    console.log('Form submit', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
