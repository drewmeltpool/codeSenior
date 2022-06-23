import { IKey } from '../../types';
import { developerExperience } from '../../Repository';

class DeveloperExperienceService {
  public findById(id: IKey) {
    const devExperience = developerExperience.findById(id);

    return devExperience;
  }

  public create(data: {
    title: string;
    position: string;
    description: string;
    start: string;
    end: string;
    developerId: IKey;
  }) {
    const devExperience = developerExperience.create(data);

    return devExperience;
  }

  public async delete(developerId: IKey, id: IKey) {
    const devExperience = developerExperience.delete(developerId, id);

    return devExperience;
  }

  public async update(
    developerId: IKey,
    id: IKey,
    data: {
      title?: string;
      description?: string;
      position?: string;
      start?: string;
      end?: string;
      developerId?: IKey;
    }
  ) {
    const devExperience = developerExperience.update(developerId, id, data);

    return devExperience;
  }
}

export default new DeveloperExperienceService();
