import { axios } from 'src/utils';

import { request } from 'src/utils';

export const retrieve = async () => {
  const responce = await request(axios.get('developers'));

  return responce;
};
