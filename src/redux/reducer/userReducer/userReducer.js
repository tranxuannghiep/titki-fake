import StorageKeys from 'constant/storage-keys';
import { LOGIN, LOGOUT, REGISTER } from 'redux/types';
const initState = {
  currentUser: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  settings: {},
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      return {
        ...state,
        currentUser: {},
      };
    }
    default:
      return state;
  }
};
export default userReducer;
