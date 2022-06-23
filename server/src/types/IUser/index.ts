import { EUserTableNames } from '../../constants';
import { IKey } from '../IKey';

export interface IUser {
  id: IKey;
  name: string;
  lastName: string;
  image: string;
  email: string;
  password: string;
  activationLink: string;
  userTableNameId: EUserTableNames;
  isActivated: boolean;
  private: boolean;
}
