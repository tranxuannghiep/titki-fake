import { createSelector } from 'reselect';
import { getDistricts, getProvinces, getWards } from 'sub-vn';

export const cartSelector = (state) => state.cartReducer.carts;
export const arrayIdSelector = (state) => state.cartReducer.arrayId;

export const getTotalPrice = createSelector(cartSelector, (carts) =>
  carts.reduce((acc, val) => acc + val.salePrice * val.quantity, 0)
);

export const getTotalProduct = createSelector(cartSelector, (carts) => carts.length);

export const getProvinceByCode = (code) => getProvinces().filter((val) => val.code === code);
export const getDistrictByCode = (code) => getDistricts().filter((val) => val.code === code);
export const getWardByCode = (code) => getWards().filter((val) => val.code === code);
