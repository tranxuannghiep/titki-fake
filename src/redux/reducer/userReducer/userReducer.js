import { LOGIN, LOGOUT, REGISTER } from 'redux/types';
const initState = {
  currentUser: {},
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
