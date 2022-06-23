import { IKey } from '../../types';
import { developerTechnology } from '../../Repository';

class DeveloperTechonologyService {
  public findById(id: IKey) {
    const devTechnology = developerTechnology.findById(id);

    return devTechnology;
  }

  public create(data: { year: string; technologyId: IKey; developerId: IKey }) {
    const devTechnology = developerTechnology.create(data);

    return devTechnology;
  }

  public delete(developerId: IKey, id: IKey) {
    const devTechnology = developerTechnology.delete(developerId, id);

    return devTechnology;
  }

  public update(
    developerId: IKey,
    id: IKey,
    data: {
      year?: string;
      technologyId?: IKey;
    }
  ) {
    const devTechnology = developerTechnology.update(developerId, id, data);

    return devTechnology;
  }
}

export default new DeveloperTechonologyService();
