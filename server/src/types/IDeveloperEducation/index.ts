import { IKey } from '../IKey';

export interface IDeveloperEducation {
  id: IKey;
  title: string;
  position: string;
  description: string;
  start: string;
  end: string;
  developerId: IKey;
}
