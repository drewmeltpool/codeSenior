import { ETypes } from './types';

export const setLoading = (state: boolean) => ({
  type: ETypes.SET_LOADING,
  payload: state,
});

export const getLoading = () => ({
  type: ETypes.GET_LOADING,
});
