import { IKey } from '../IKey';

export interface IUser {
  firstName: string;
  lastName: string;
  title: string;
  shortDescription: string;
  image: string;
  city: string;
  id: IKey;
  email: string;
  accessToken: string;
}
