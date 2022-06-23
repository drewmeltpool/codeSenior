import { axios } from 'src/utils';

import { request } from 'src/utils';
import { IKey } from 'src/types';

export const update = async (id: IKey, data: any) => {
  return await request(axios.put(`recruiter/${id}`, data));
};
