import { axios } from 'src/utils';

import { request } from 'src/utils';

export const apply = async (data: any) => {
  const response = await request(axios.post(`post-confirm`, data));

  return response;
};
