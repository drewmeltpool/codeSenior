import { IAction } from 'src/types';
import { ETypes } from './types';

const initialState = {
  posts: [],
};

export const recruiter = (
  state = initialState,
  action: IAction<ETypes, any>
) => {
  switch (action.type) {
    case ETypes.SET_RECRUITER:
      return { ...state, ...action.payload };
    case ETypes.UPDATE_POST_RECRUITER:
      return { ...state, posts: action.payload };
    case ETypes.CREATE_POST_RECRUITER:
      return { ...state, posts: action.payload };
    case ETypes.DELETE_POST_RECRUITER:
      return { ...state, posts: action.payload };
    case ETypes.UPDATE_RECRUITER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
