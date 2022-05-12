import userApi from 'api/userApi';
import StorageKeys from 'constant/storage-keys';
export const register = (payload) => async (dispatch) => {
  const data = await userApi.register(payload);
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  dispatch({
    type: 'user/register',
    payload: data.user,
  });
};
export const login = (payload) => async (dispatch) => {
  const data = await userApi.login(payload);
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  dispatch({
    type: 'user/login',
    payload: data.user,
  });
};

export const logout = () => {
  return {
    type: 'user/logout',
  };
};
