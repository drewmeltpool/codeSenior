import { ETypes } from './types';

export const setDeveloper = (payload: any) => ({
  type: ETypes.SET_DEVELOPER,
  payload,
});

export const createEducation = (payload: any) => ({
  type: ETypes.CREATE_DEVELOPER_EDUCATION,
  payload,
});

export const updateEducation = (payload: any) => ({
  type: ETypes.UPDATE_DEVELOPER_EDUCATION,
  payload,
});

export const deleteEducation = (payload: any) => ({
  type: ETypes.DELETE_DEVELOPER_EDUCATION,
  payload,
});

export const createExperience = (payload: any) => ({
  type: ETypes.CREATE_DEVELOPER_EXPERIENCE,
  payload,
});

export const updateExperience = (payload: any) => ({
  type: ETypes.UPDATE_DEVELOPER_EXPERIENCE,
  payload,
});

export const deleteExperience = (payload: any) => ({
  type: ETypes.DELETE_DEVELOPER_EXPERIENCE,
  payload,
});

export const createTech = (payload: any) => ({
  type: ETypes.CREATE_DEVELOPER_TECH,
  payload,
});

export const updateTech = (payload: any) => ({
  type: ETypes.UPDATE_DEVELOPER_TECH,
  payload,
});

export const deleteTech = (payload: any) => ({
  type: ETypes.DELETE_DEVELOPER_TECH,
  payload,
});

export const createLanguage = (payload: any) => ({
  type: ETypes.CREATE_DEVELOPER_LANGUAGE,
  payload,
});

export const updateLanguage = (payload: any) => ({
  type: ETypes.UPDATE_DEVELOPER_LANGUAGE,
  payload,
});

export const deleteLanguage = (payload: any) => ({
  type: ETypes.DELETE_DEVELOPER_LANGUAGE,
  payload,
});
