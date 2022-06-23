import { IKey } from '../../types';
import { developerEducation } from '../../Repository';

class DeveloperEducationService {
  public findById(id: IKey) {
    const devEducation = developerEducation.findById(id);

    return devEducation;
  }

  public create(data: {
    title: string;
    position: string;
    description: string;
    start: string;
    end: string;
    developerId: IKey;
  }) {
    const devEducation = developerEducation.create(data);

    return devEducation;
  }

  public async delete(developerId: IKey, id: IKey) {
    const devEducation = developerEducation.delete(developerId, id);

    return devEducation;
  }

  public async update(
    developerId: IKey,
    id: IKey,
    data: {
      title?: string;
      description?: string;
      position: string;
      start?: string;
      end?: string;
      developerId?: IKey;
    }
  ) {
    const devEducation = developerEducation.update(developerId, id, data);

    return devEducation;
  }
}

export default new DeveloperEducationService();
