import * as api from 'src/api';
import * as userAction from './actions';
import decode from 'jwt-decode';
import { loadingAction } from '../loading';

export const registerUser =
  ({ data, onSuccess }: any) =>
  async (dispatch: any) => {
    dispatch(loadingAction.setLoading(true));
    const response = await api.user.register(data);

    const [user, error] = response;

    if (error) {
      dispatch(loadingAction.setLoading(false));
      throw new Error(error);
    }

    localStorage.setItem('token', user.accessToken);

    const [profile] = await api.user.profile(user.user.id);

    dispatch(userAction.registerUser(profile));
    dispatch(loadingAction.setLoading(false));

    onSuccess?.();
  };

export const loginUser = (data: any) => async (dispatch: any) => {
  dispatch(loadingAction.setLoading(true));
  const response = await api.user.login(data);

  const [user, error] = response;

  if (error) {
    dispatch(loadingAction.setLoading(false));
    throw new Error(error);
  }

  localStorage.setItem('token', user.accessToken);

  const [profile] = await api.user.profile(user.user.id);

  dispatch(userAction.loginUser(profile));
  dispatch(loadingAction.setLoading(false));
};

export const getUser = () => async (dispatch: any) => {
  dispatch(loadingAction.setLoading(true));
  const token = localStorage.getItem('token') || '';

  try {
    const user = decode<any>(token);

    const [profile, error] = await api.user.profile(user.id);

    if (error) {
      dispatch(userAction.getUser({ userTableNameId: -1 }));
    } else {
      dispatch(userAction.getUser(profile));
    }
  } catch {
    dispatch(userAction.getUser({ userTableNameId: -1 }));
  }

  dispatch(loadingAction.setLoading(false));
};

export const updateUser =
  (payload: any) => async (dispatch: any, store: any) => {
    dispatch(loadingAction.setLoading(true));
    const id = store().user.id;

    const [profile] = await api.user.update(id, payload);

    dispatch(userAction.updateUser(profile));
    dispatch(loadingAction.setLoading(false));
  };

export const exitUser = () => (dispatch: any) => {
  localStorage.clear();

  dispatch(userAction.exitUser());
};
