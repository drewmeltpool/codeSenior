import { axios } from 'src/utils';

import { request } from 'src/utils';

export const applied = async (userId: number) => {
  const response = await request(axios.get(`post-confirm/user/${userId}`));

  return response;
};
