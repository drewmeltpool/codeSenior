import { IDeveloper, IKey } from '../../types';
import { db } from '../../Database';
import developerEducation from '../DeveloperEducation';
import developerExperience from '../DeveloperExperience';
import developerLanguage from '../DeveloperLanguage';
import developerTechnology from '../DeveloperTechnology';

class DeveloperRepository {
  private readonly _db = () => db<IDeveloper>('Developer');

  public async create(data: any) {
    const [developer] = await this._db().insert(data).returning('*');

    return developer;
  }

  public async findByUserId(userId: IKey) {
    const [developer] = await this._db()
      .select('*')
      .where({ userId })
      .returning('*');

    if (!developer) throw new Error('dont exist');

    const education = await developerEducation.findById(developer.id);
    const experience = await developerExperience.findById(developer.id);
    const language = await developerLanguage.findById(developer.id);
    const technology = await developerTechnology.findById(developer.id);

    return { ...developer, education, experience, language, technology };
  }

  public async findById(id: IKey) {
    const [developer] = await this._db()
      .select('*')
      .where({ id })
      .returning('*');

    if (!developer) throw new Error('dont exist');

    return developer;
  }

  public async deleteById(id: IKey) {
    const [developer] = await this._db().where({ id }).del().returning('*');

    return developer;
  }

  public async update(id: IKey, data: IDeveloper) {
    await this.findById(id);

    const [developer] = await this._db()
      .update(data)
      .where({ id })
      .returning('*');

    return developer;
  }

  public async retrieve() {
    const devs = await this._db()
      .select(
        'User.firstName as firstName',
        'User.lastName as lastName',
        'User.title as title',
        'User.shortDescription as description',
        'User.id as userId',
        'Developer.id as id',
        'Developer.english as english',
        'Developer.salary as salary'
      )
      .join('User', 'userId', 'User.id')
      .returning('*');

    return devs;
  }
}

export default new DeveloperRepository();
