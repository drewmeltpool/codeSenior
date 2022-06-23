import { axios } from 'src/utils';

import { request } from 'src/utils';

export const del = async (id: string) => {
  const response = await request(axios.delete(`post/${id}`));

  return response;
};
