import { IKey } from '../../types';
import { developerLanguage } from '../../Repository';

class DeveloperLanguageService {
  public findById(id: IKey) {
    const devLanguage = developerLanguage.findById(id);

    return devLanguage;
  }

  public create(data: { language: string; developerId: IKey }) {
    const devLanguage = developerLanguage.create(data);

    return devLanguage;
  }

  public delete(developerId: IKey, id: IKey) {
    const devLanguage = developerLanguage.delete(developerId, id);

    return devLanguage;
  }

  public update(
    developerId: IKey,
    id: IKey,
    data: {
      language?: string;
    }
  ) {
    const devLanguage = developerLanguage.update(developerId, id, data);

    return devLanguage;
  }
}

export default new DeveloperLanguageService();
