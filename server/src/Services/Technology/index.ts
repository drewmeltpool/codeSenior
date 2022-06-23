import { IKey } from '../../types/IKey';
import { technologyRepository } from '../../Repository';

class TechnologyService {
  public retrieve() {
    const tech = technologyRepository.retrieve();
    return tech;
  }

  public findById(id: IKey) {
    const tech = technologyRepository.findById(id);
    return tech;
  }

  public create(name: string, icon: string, languageId: IKey) {
    const tech = technologyRepository.create(name, icon, languageId);
    return tech;
  }

  public update(id: IKey, name: string, icon: string, languageId: IKey) {
    const tech = technologyRepository.update(id, name, icon, languageId);
    return tech;
  }

  public deleteById(id: IKey) {
    const tech = technologyRepository.deleteById(id);
    return tech;
  }
}

export default new TechnologyService();
