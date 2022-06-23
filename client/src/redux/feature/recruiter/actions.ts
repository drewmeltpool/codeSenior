import { ETypes } from './types';

export const setRecruiter = (data: any) => ({
  type: ETypes.SET_RECRUITER,
  payload: data,
});

export const updateRecruiter = (data: any) => ({
  type: ETypes.UPDATE_RECRUITER,
  payload: data,
});

export const deleteRecruiterPost = (data: any) => ({
  type: ETypes.DELETE_POST_RECRUITER,
  payload: data,
});

export const createRecruiterPost = (data: any) => ({
  type: ETypes.CREATE_POST_RECRUITER,
  payload: data,
});

export const updateRecruiterPost = (data: any) => ({
  type: ETypes.UPDATE_POST_RECRUITER,
  payload: data,
});
