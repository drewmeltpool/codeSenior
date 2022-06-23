import { axios } from 'src/utils';

import { request } from 'src/utils';
import { IKey } from 'src/types';

export const update = async (
  id: IKey,
  data: {
    firstName?: string;
    lastName?: string;
    hidden?: boolean;
    title?: string;
    shortDescription?: string;
    image?: string;
  }
) => {
  return await request(axios.put(`user/${id}`, data));
};
