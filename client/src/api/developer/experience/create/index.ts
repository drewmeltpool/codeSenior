import { axios } from 'src/utils';

import { IKey } from 'src/types';
import { request } from 'src/utils';

export const create = async (devId: IKey, data: any) => {
  const responce = await request(
    axios.post(`developer-experience/${devId}`, data)
  );

  return responce;
};
