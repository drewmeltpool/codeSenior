import { axios } from 'src/utils';

import { request } from 'src/utils';
import { IKey } from 'src/types';

export const posts = async (id: IKey) => {
  return await request(axios.get(`post/recruiter/${id}`));
};
