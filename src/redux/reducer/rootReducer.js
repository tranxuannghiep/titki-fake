import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
