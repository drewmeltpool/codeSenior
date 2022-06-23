import { db } from '../../Database';
import { IKey, ITechnology } from '../../types';

class TechnologyRepository {
  private readonly _db = () => db<ITechnology>('Technology');

  public async create(
    name: string,
    icon: string,
    languageId: IKey
  ): Promise<ITechnology> {
    const [tech] = await this._db()
      .insert({ name, icon, languageId })
      .returning('*');

    return tech;
  }

  public async findById(id: IKey): Promise<ITechnology> {
    const [tech] = await this._db().select('*').where({ id }).returning('*');

    if (!tech) throw new Error(`dont exist tech with ${id}`);

    return tech;
  }

  public async deleteById(id: IKey): Promise<ITechnology> {
    await this.findById(id);

    const [tech] = await this._db().where({ id }).del().returning('*');

    return tech;
  }

  public async update(
    id: IKey,
    name: string,
    icon: string,
    languageId: IKey
  ): Promise<ITechnology> {
    await this.findById(id);

    const [tech] = await this._db()
      .update({ name, icon, languageId })
      .where({ id })
      .returning('*');
    return tech;
  }

  public async retrieve(): Promise<ITechnology[]> {
    const techs = await this._db().select('*').returning('*');

    return techs;
  }
}

export default new TechnologyRepository();
