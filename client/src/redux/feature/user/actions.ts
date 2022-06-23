import { ETypes } from './types';

export const registerUser = (payload: any) => ({
  type: ETypes.REGISTER_USER,
  payload,
});

export const loginUser = (payload: any) => ({
  type: ETypes.LOGIN_USER,
  payload,
});

export const getUser = (payload: any) => ({
  type: ETypes.GET_USER,
  payload,
});

export const updateUser = (payload: any) => ({
  type: ETypes.UPDATE_USER,
  payload,
});

export const exitUser = () => ({
  type: ETypes.EXIT_USER,
});
