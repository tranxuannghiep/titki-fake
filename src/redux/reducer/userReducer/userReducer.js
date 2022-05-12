import StorageKeys from 'constant/storage-keys';
const initState = {
  currentUser: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  settings: {},
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'user/register': {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case 'user/login': {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case 'user/logout': {
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
