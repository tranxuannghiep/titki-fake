import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import cartReducer from './cartReducer/cartReducer';
import visibleReducer from './visibleReducer/visibleReducer';

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  visibleReducer,
});

export default rootReducer;
