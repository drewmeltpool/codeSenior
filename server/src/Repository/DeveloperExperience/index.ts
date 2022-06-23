import { IDeveloperExperience, IKey } from '../../types';
import { db } from '../../Database';

class DeveloperExperienceRepository {
  private readonly _db = () => db<IDeveloperExperience>('Developer_Experience');

  public async create(data: {
    title: string;
    position: string;
    description: string;
    start: string;
    end: string;
    developerId: IKey;
  }) {
    const [devsExperience] = await this._db().insert(data).returning('*');

    return devsExperience;
  }

  public async findById(id: IKey) {
    const devsExperience = await this._db()
      .select('*')
      .where({ developerId: id })
      .returning('*');

    return devsExperience;
  }

  public async delete(developerId: IKey, id: IKey) {
    const [devExperience] = await this._db()
      .where({ developerId, id })
      .del()
      .returning('*');

    return devExperience;
  }

  public async update(
    developerId: IKey,
    id: IKey,
    data: {
      title?: string;
      position?: string;
      description?: string;
      start?: string;
      end?: string;
      developerId?: IKey;
    }
  ) {
    const [devExperience] = await this._db()
      .where({ developerId, id })
      .update(data)
      .returning('*');

    return devExperience;
  }
}

export default new DeveloperExperienceRepository();
