import userApi from 'api/userApi';
import StorageKeys from 'constant/storage-keys';
import { LOGIN, LOGOUT, REGISTER } from 'redux/types';
export const register = (payload) => async (dispatch) => {
  const data = await userApi.register(payload);
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  dispatch({
    type: REGISTER,
    payload: data.user,
  });
};
export const login = (payload) => async (dispatch) => {
  const data = await userApi.login(payload);
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
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
