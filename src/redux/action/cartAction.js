import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from 'redux/types';

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id,
  };
};

export const updateToCart = (payload) => {
  return {
    type: UPDATE_TO_CART,
    payload: payload,
  };
};
