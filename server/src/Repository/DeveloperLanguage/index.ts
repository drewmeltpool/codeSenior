import { IDeveloperLanguage, IKey } from '../../types';
import { db } from '../../Database';

class DeveloperLanguageRepository {
  private readonly _db = () => db<IDeveloperLanguage>('Developer_Language');

  public async create(data: { language: string; developerId: IKey }) {
    const [devLanguage] = await this._db().insert(data).returning('*');

    return devLanguage;
  }

  public async findById(id: IKey) {
    const devsLanguage = await this._db()
      .select('*')
      .where({ developerId: id })
      .returning('*');

    return devsLanguage;
  }

  public async delete(developerId: IKey, id: IKey) {
    const [devLanguage] = await this._db()
      .where({ developerId, id })
      .del()
      .returning('*');

    return devLanguage;
  }

  public async update(
    developerId: IKey,
    id: IKey,
    data: {
      language?: string;
    }
  ) {
    const [devLanguage] = await this._db()
      .where({ developerId, id })
      .update(data)
      .returning('*');

    return devLanguage;
  }
}

export default new DeveloperLanguageRepository();
