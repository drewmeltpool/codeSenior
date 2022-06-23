import { axios } from 'src/utils';

import { IKey } from 'src/types';
import { request } from 'src/utils';

export const update = async (devId: IKey, id: IKey, data: any) => {
  const responce = await request(
    axios.put(`developer-experience/${devId}/${id}`, data)
  );

  return responce;
};
