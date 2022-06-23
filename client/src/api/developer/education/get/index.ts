import { axios } from 'src/utils';

import { IKey } from 'src/types';
import { request } from 'src/utils';

export const get = async (id: IKey) => {
  const responce = await request(axios.get(`developer-education/${id}`));

  return responce;
};
