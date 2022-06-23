import { axios } from 'src/utils';

import { request } from 'src/utils';

export const retrieve = async () => {
  return await request(axios.get('technology'));
};
