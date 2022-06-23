import { axios } from 'src/utils';

import { request } from 'src/utils';

export const deleteApply = async (userId: number, postId: number) => {
  const response = await request(
    axios.delete(`post-confirm/${userId}/${postId}`)
  );

  return response;
};
