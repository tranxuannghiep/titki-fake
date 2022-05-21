import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, Skeleton }) => {
  const user = useSelector((state) => state.userReducer.currentUser);

  return !user.id ? Skeleton : children;
};
export default PrivateRoute;
