import { ETypes } from './types';

const initialState = {
  education: [],
  language: [],
  experience: [],
  technology: [],
} as any;

type TUserAction = {
  type: ETypes;
  payload: any;
};

export const developer = (state = initialState, action: TUserAction) => {
  switch (action.type) {
    case ETypes.SET_DEVELOPER:
      return { ...state, ...action.payload };
    case ETypes.CREATE_DEVELOPER_EDUCATION:
      return { ...state, education: [...state.education, action.payload] };
    case ETypes.UPDATE_DEVELOPER_EDUCATION:
      return {
        ...state,
        education: [
          ...state.education.filter(({ id }: any) => id !== action.payload.id),
          action.payload,
        ],
      };
    case ETypes.DELETE_DEVELOPER_EDUCATION:
      return {
        ...state,
        education: [
          ...state.education.filter(({ id }: any) => id !== action.payload),
        ],
      };
    case ETypes.CREATE_DEVELOPER_EXPERIENCE:
      return { ...state, experience: [...state.experience, action.payload] };
    case ETypes.UPDATE_DEVELOPER_EXPERIENCE:
      return {
        ...state,
        experience: [
          ...state.experience.filter(({ id }: any) => id !== action.payload.id),
          action.payload,
        ],
      };
    case ETypes.DELETE_DEVELOPER_EXPERIENCE:
      return {
        ...state,
        experience: [
          ...state.experience.filter(({ id }: any) => id !== action.payload),
        ],
      };
    case ETypes.DELETE_DEVELOPER_TECH:
      return {
        ...state,
        technology: [
          ...state.technology.filter(({ id }: any) => id !== action.payload),
        ],
      };
    case ETypes.UPDATE_DEVELOPER_TECH:
      return {
        ...state,
        technology: [
          ...state.technology.filter(({ id }: any) => id !== action.payload),
          action.payload,
        ],
      };
    case ETypes.CREATE_DEVELOPER_TECH:
      return { ...state, technology: [...state.technology, action.payload] };
    default:
      return state;
  }
};
