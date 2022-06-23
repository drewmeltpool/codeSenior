import { db } from '../../Database';
import { IKey, IUser } from '../../types';
import { EUserTableNames } from '../../constants';

class UserRepository {
  private readonly _db = () => db<IUser>('User');

  public async retrieve() {
    const users = await this._db().select('*').returning('*');

    return users;
  }

  public async findByEmail(data: { email: string }): Promise<IUser> {
    const [user] = await this._db().select('*').where(data).returning('*');

    return user;
  }

  public async findByActivationLink(data: { activationLink: string }) {
    const [user] = await this._db().select('*').where(data).returning('*');

    return user;
  }

  public async findById(data: { id: IKey }) {
    const [user] = await this._db().select('*').where(data).returning('*');

    return user;
  }

  public async create(data: {
    email: string;
    password: string;
    activationLink: string;
    userTableNameId: EUserTableNames;
  }) {
    const [user] = await this._db().insert(data).returning('*');

    return user;
  }

  public async activate(data: { activationLink: string }) {
    const [user] = await this._db()
      .update({ isActivated: true })
      .where(data)
      .returning('*');

    return user;
  }

  public async delete(data: { id: IKey }) {
    const [user] = await this._db().where(data).del().returning('*');

    return user;
  }

  public async refreshPassword(data: { id: IKey; password: string }) {
    const [user] = await this._db()
      .where({ id: data.id })
      .update({ password: data.password })
      .returning('*');

    return user;
  }

  public async update(
    id: IKey,
    data: {
      firstName?: string;
      lastName?: string;
      hidden?: boolean;
      title?: string;
      shortDescription?: string;
      image?: string;
      city?: string;
    }
  ) {
    const [user] = await this._db().update(data).where({ id }).returning('*');

    return user;
  }
}

export default new UserRepository();
