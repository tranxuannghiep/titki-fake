import { LOGIN, LOGOUT, REGISTER, SET_CURRENT_USER } from 'redux/types';
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
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
      };
    }
    default:
      return state;
  }
};
export default userReducer;
