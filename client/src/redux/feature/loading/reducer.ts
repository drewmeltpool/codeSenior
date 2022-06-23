import { ETypes } from './types';

type TLoadingAction = {
  type: ETypes;
  payload: any;
};

export const loading = (state = false, action: TLoadingAction) => {
  switch (action.type) {
    case ETypes.SET_LOADING:
      return action.payload;
    case ETypes.GET_LOADING:
      return state;
    default:
      return state;
  }
};
