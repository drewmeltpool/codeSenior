import { axios } from 'src/utils';

import { request } from 'src/utils';

export const update = async (id: any, data: any) => {
  const responce = await request(axios.post('developers/' + id, data));

  return responce;
};
