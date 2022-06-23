import { get } from '../get';
import { IKey } from 'src/types';

export const profile = async (id: IKey) => {
  return await get(id);
};
