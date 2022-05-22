import userApi from 'api/userApi';
import { LOGIN, LOGOUT, REGISTER, SET_CURRENT_USER } from 'redux/types';
export const register = (payload) => async (dispatch) => {
  const data = await userApi.register(payload);
  dispatch({
    type: REGISTER,
    payload: data.user,
  });
};
export const login = (payload) => async (dispatch) => {
  const data = await userApi.login(payload);
  dispatch({
    type: LOGIN,
    payload: data.user,
  });
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setcurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};
