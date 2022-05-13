import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import cartReducer from './cartReducer/cartReducer';

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default rootReducer;
