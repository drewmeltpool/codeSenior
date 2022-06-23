import { IKey } from '../IKey';

export interface IDeveloper {
  id: IKey;
  salary: number;
  city: string;
  english: string;
  userId: IKey;
}
