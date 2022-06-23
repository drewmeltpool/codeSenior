import * as api from 'src/api';
import * as developerAction from './actions';

export const createEducation =
  (education: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    const [data] = await api.developer.education.create(devId, education);

    dispatch(developerAction.createEducation(data));
  };

export const updateEducation =
  (id: any, education: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    const [data] = await api.developer.education.update(devId, id, education);

    dispatch(developerAction.updateEducation(data));
  };

export const deleteEducation =
  (id: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    await api.developer.education.del(devId, id);

    dispatch(developerAction.deleteEducation(id));
  };

export const createExperience =
  (experience: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    const [data] = await api.developer.experience.create(devId, experience);

    dispatch(developerAction.createExperience(data));
  };

export const updateExperience =
  (id: any, experience: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    const [data] = await api.developer.experience.update(devId, id, experience);

    dispatch(developerAction.updateExperience(data));
  };

export const deleteExperience =
  (id: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    await api.developer.experience.del(devId, id);

    dispatch(developerAction.deleteExperience(id));
  };

export const deleteTechnology =
  (id: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    await api.developer.technology.del(devId, id);

    dispatch(developerAction.deleteTech(id));
  };

export const updateTechnology =
  (id: any, data: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    const [tech] = await api.developer.technology.update(devId, id, data);

    dispatch(developerAction.updateTech(tech));
  };

export const createTechnology =
  (data: any) => async (dispatch: any, store: any) => {
    const devId = store().user.profile.id;

    const [newTech] = await api.developer.technology.create(devId, data);

    dispatch(developerAction.createTech(newTech));
  };
