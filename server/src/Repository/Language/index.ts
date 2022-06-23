import { IKey, ILanguage } from '../../types';
import { db } from '../../Database';

class LanguageRepository {
  private readonly _db = () => db<ILanguage>('Language');

  public async create(name: string): Promise<ILanguage> {
    const [language] = await this._db().insert({ name }).returning('*');

    return language;
  }

  public async findById(id: IKey): Promise<ILanguage> {
    const [language] = await this._db()
      .select('*')
      .where({ id })
      .returning('*');

    if (!language) throw new Error('dont exist');

    return language;
  }

  public async deleteById(id: IKey): Promise<ILanguage> {
    const [language] = await this._db().where({ id }).del().returning('*');

    return language;
  }

  public async update(id: IKey, name: string): Promise<ILanguage> {
    await this.findById(id);

    const [language] = await this._db()
      .update({ name })
      .where({ id })
      .returning('*');

    return language;
  }

  public async retrieve(): Promise<ILanguage[]> {
    const language = await this._db().select('*').returning('*');

    return language;
  }
}

export default new LanguageRepository();
