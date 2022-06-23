import { IKey } from '../../types/IKey';
import { languageRepository } from '../../Repository';

class LanguageService {
  public retrieve() {
    const languages = languageRepository.retrieve();

    return languages;
  }

  public findById(id: IKey) {
    const languages = languageRepository.findById(id);

    return languages;
  }

  public create(name: string) {
    const language = languageRepository.create(name);

    return language;
  }

  public update(id: IKey, name: string) {
    const language = languageRepository.update(id, name);

    return language;
  }

  public deleteById(id: IKey) {
    const language = languageRepository.deleteById(id);

    return language;
  }
}

export default new LanguageService();
