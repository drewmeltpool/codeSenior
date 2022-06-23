import { IKey } from '../IKey';

export interface IDeveloperExperience {
  id: IKey;
  title: string;
  position: string;
  description: string;
  start: string;
  end: string;
  developerId: IKey;
}
