import jwt from 'jsonwebtoken';
import { IKey, IUser } from '../../types';
import { db } from '../../Database';

class TokenService {
  private readonly _userTokenSchema = db('User_Token');

  public generate(payload: object) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
      expiresIn: '30m',
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  public async save(id: IKey, refreshToken: string) {
    const [findToken] = await this._userTokenSchema.select('*').where({ id });

    if (findToken) {
      const updated = await this._userTokenSchema
        .where({ id })
        .update({ refreshToken })
        .returning('*');

      return updated;
    }

    const token = await this._userTokenSchema
      .insert({
        userId: id,
        refreshToken,
      })
      .returning('*');

    return token;
  }

  public async removeToken(refreshToken: string) {
    const [tokenData] = await this._userTokenSchema
      .where({ refreshToken })
      .del()
      .returning('*');

    return tokenData;
  }

  public validateAccessToken(token: string) {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN) as IUser;
    return userData;
  }

  public validateRefreshToken(token: string) {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN) as IUser;
    return userData;
  }

  public async findToken(refreshToken: string) {
    const [token] = await this._userTokenSchema
      .select('*')
      .where({ refreshToken })
      .returning('*');

    return token;
  }
}

export default new TokenService();
