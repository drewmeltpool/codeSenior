import { axios } from 'src/utils';

import { request } from 'src/utils';

export const get = async (id: string) => {
  const response = await request(axios.get(`post/${id}`));

  return response;
};
