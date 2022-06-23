import { axios } from 'src/utils';

import { IUser } from 'src/types';
import { request } from 'src/utils';

export const get = async (id: string) => {
  const response = await request<{ user: IUser }>(axios.get(`user/${id}`));

  return response;
};
