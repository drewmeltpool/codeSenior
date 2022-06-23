import { IAction } from 'src/types';
import { ETypes } from './types';

export const user = (state = {}, action: IAction<ETypes, any>) => {
  switch (action.type) {
    case ETypes.REGISTER_USER:
      return { ...state, ...action.payload };
    case ETypes.LOGIN_USER:
      return { ...state, ...action.payload };
    case ETypes.GET_USER:
      return { ...state, ...action.payload };
    case ETypes.UPDATE_USER:
      return { ...state, ...action.payload };
    case ETypes.EXIT_USER:
      return {
        userTableNameId: -1,
      };
    default:
      return state;
  }
};
