import { IKey } from '../IKey';

export interface IPost {
  id?: IKey;
  authorId: IKey;
  postDate: string;
  from: number;
  to: number;
  title: string;
  position: string;
  description: string;
  bonuses: string;
  requirement: string;
  additional: string;
}
