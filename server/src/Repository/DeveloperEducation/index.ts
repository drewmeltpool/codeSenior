import { IDeveloperEducation, IKey } from '../../types';
import { db } from '../../Database';

class DeveloperEducationRepository {
  private readonly _db = () => db<IDeveloperEducation>('Developer_Education');

  public async create(data: {
    title: string;
    description: string;
    position: string;
    start: string;
    end: string;
    developerId: IKey;
  }) {
    const [devEducation] = await this._db().insert(data).returning('*');

    return devEducation;
  }

  public async findById(developerId: IKey) {
    const devEducation = await this._db()
      .select('*')
      .where({ developerId })
      .returning('*');

    if (!devEducation) throw new Error('Empty');

    return devEducation;
  }

  public async findByIdEducation(developerId: IKey, id: IKey) {
    const [devEducation] = await this._db()
      .select('*')
      .where({ developerId, id })
      .returning('*');

    if (!devEducation) throw new Error('Empty');

    return devEducation;
  }

  public async delete(developerId: IKey, id: IKey) {
    await this.findByIdEducation(developerId, id);

    const [devEducation] = await this._db()
      .where({ developerId, id })
      .del()
      .returning('*');

    return devEducation;
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
    const [devEducation] = await this._db()
      .where({ developerId, id })
      .update(data)
      .returning('*');

    return devEducation;
  }
}

export default new DeveloperEducationRepository();
