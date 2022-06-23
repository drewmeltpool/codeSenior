import { IDeveloperTechnology, IKey } from '../../types';
import { db } from '../../Database';

class DeveloperTechnologyRepository {
  private readonly _db = () => db<IDeveloperTechnology>('Developer_Technology');

  public async create(data: {
    year: string;
    technologyId: IKey;
    developerId: IKey;
  }) {
    const [devTechnology] = await this._db().insert(data).returning('*');

    const [tech] = await this._db()
      .select('Developer_Technology.id as id', 'year', 'icon', 'name')
      .join('Technology', 'technologyId', 'Technology.id')
      .where('Developer_Technology.id', devTechnology.id)
      .returning('*');

    return tech;
  }

  public async findById(id: IKey) {
    const devTechnology = await this._db()
      .select('Developer_Technology.id as id', 'year', 'icon', 'name')
      .join('Technology', 'technologyId', 'Technology.id')
      .where({ developerId: id })
      .returning('*');

    return devTechnology;
  }

  public async delete(developerId: IKey, id: IKey) {
    const [devTechnology] = await this._db()
      .where({ developerId, id })
      .del()
      .returning('*');

    if (!devTechnology) throw new Error('Err to delete');

    return devTechnology;
  }

  public async update(
    developerId: IKey,
    id: IKey,
    data: {
      year?: string;
    }
  ) {
    const [devTechnology] = await this._db()
      .where({ developerId, id })
      .update(data)
      .returning('*');

    return devTechnology;
  }
}

export default new DeveloperTechnologyRepository();
