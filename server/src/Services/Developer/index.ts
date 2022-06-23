import { IKey } from '../../types/IKey';
import { developerRepository } from '../../Repository';

class DeveloperService {
  public retrieve() {
    const devs = developerRepository.retrieve();
    return devs;
  }

  public update(id: IKey, data: any) {
    const dev = developerRepository.update(id, data);
    return dev;
  }

  public findById(id: IKey) {
    const dev = developerRepository.findById(id);
    return dev;
  }

  public deleteById(id: IKey) {
    const recruiter = developerRepository.deleteById(id);
    return recruiter;
  }
}

export default new DeveloperService();
