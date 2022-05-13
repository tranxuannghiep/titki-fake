import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from 'redux/types';

const initState = {
  carts: [],
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const idx = state.carts.findIndex((val) => val.id === action.payload.id);
      if (idx === -1) {
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      } else {
        return {
          ...state,
          carts: [
            ...state.carts.slice(0, idx),
            { ...state.carts[idx], quantity: state.carts[idx].quantity + action.payload.quantity },
            ...state.carts.slice(idx + 1),
          ],
        };
      }
    }
    case UPDATE_TO_CART: {
      return {
        ...state,
        carts: action.payload,
      };
    }
    case REMOVE_TO_CART: {
      const idx = state.carts.findIndex((val) => val.id === action.payload);
      if (idx === -1) return;
      return {
        ...state,
        carts: [...state.carts.slice(0, idx), ...state.carts.slice(idx + 1)],
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
