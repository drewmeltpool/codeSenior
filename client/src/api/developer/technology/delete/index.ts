import { axios, request } from 'src/utils';

import { IKey } from 'src/types';

export const del = async (devId: IKey, id: IKey) => {
  const responce = await request(
    axios.delete(`developer-technology/${devId}/${id}`)
  );

  return responce;
};
