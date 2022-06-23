import { axios } from 'src/utils';

import { request } from 'src/utils';

export const create = async (data: any) => {
  const response = await request(axios.post(`post`, data));

  return response;
};
