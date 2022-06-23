import { axios } from 'src/utils';

import { IKey } from 'src/types';
import { request } from 'src/utils';

export const del = async (devId: IKey, id: IKey) => {
  const responce = await request(
    axios.delete(`developer-experience/${devId}/${id}`)
  );

  return responce;
};
