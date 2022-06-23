import { axios } from 'src/utils';

import { IKey } from 'src/types';
import { request } from 'src/utils';

export const update = async (id: IKey, data: any) => {
  const response = await request(axios.put(`post/${id}`, data));

  return response;
};
