import { IKey } from '../../types/IKey';
import { recruiterRepository } from '../../Repository';
import { IRecruiter } from '../../types';

class RecruiterService {
  public retrieve() {
    const recruiters = recruiterRepository.retrieve();
    return recruiters;
  }

  public findById(id: IKey) {
    const recruiter = recruiterRepository.findById(id);
    return recruiter;
  }

  public create(data: IRecruiter) {
    const recruiter = recruiterRepository.create(data);
    return recruiter;
  }

  public update(id: IKey, data: IRecruiter) {
    const recruiter = recruiterRepository.update(id, data);
    return recruiter;
  }

  public deleteById(id: IKey) {
    const recruiter = recruiterRepository.deleteById(id);
    return recruiter;
  }
}

export default new RecruiterService();
