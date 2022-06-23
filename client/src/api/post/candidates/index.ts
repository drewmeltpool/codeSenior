import { axios } from 'src/utils';

import { request } from 'src/utils';

export const candidates = async (postId: any) => {
  const response = await request(
    axios.get(`post-confirm/candidates/${postId}`)
  );

  return response;
};
