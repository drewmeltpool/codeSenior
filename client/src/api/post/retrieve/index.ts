import { axios } from 'src/utils';

import { request } from 'src/utils';

export const retrieve = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 350));
  const response = await request(axios.get(`post?page=${page}`));

  return response;
};
