import { axios } from 'src/utils';

import { request } from 'src/utils';

export const isApplied = async (
  userId: number | string,
  postId: number | string
) => {
  const response = await request(axios.get(`post-confirm/${userId}/${postId}`));

  return response;
};
