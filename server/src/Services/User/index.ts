import bcrypt from 'bcrypt';
import { tokenService } from '../';
// import mailService from '../Mail';
import { v4 as uuidv4 } from 'uuid';
import { IKey } from '../../types';
import { userRepository } from '../../Repository';
import { EUserTableNames } from '../../constants';
import { fullUserData } from '../../helpers';

class UserService {
  public retrieve() {
    const users = userRepository.retrieve();

    return users;
  }

  public async findById(id: IKey) {
    const user = await userRepository.findById({ id });

    const profile = await fullUserData(user.userTableNameId).findByUserId(
      user.id
    );

    return { ...user, profile };
  }

  public async register(
    email: string,
    password: string,
    userTableNameId: EUserTableNames
  ) {
    const user = await userRepository.findByEmail({ email });

    if (user) throw new Error(`User already register ${email}`);

    const activationLink = uuidv4();
    const hashPassword = await bcrypt.hash(password, +process.env.BCRYPT_SALT);

    // await mailService.sendActivationEmail(email, activationLink);

    const newUser = await userRepository.create({
      email,
      password: hashPassword,
      userTableNameId,
      activationLink,
    });

    const profile = await fullUserData(userTableNameId).create({
      userId: newUser.id,
    });

    const tokens = tokenService.generate({ ...newUser });
    await tokenService.save(newUser.id, tokens.refreshToken);

    return { ...tokens, user: { ...newUser, profile } };
  }

  public async activate(activationLink: string) {
    const user = await userRepository.findByActivationLink({ activationLink });

    if (!user) throw new Error('bad link');

    const updatedUser = await userRepository.activate({ activationLink });

    return updatedUser;
  }

  public async login(email: string, password: string) {
    const user = await userRepository.findByEmail({ email });

    if (!user)
      throw {
        code: 400,
        statusCode: 400,
        message: 'Пользователь с таким email не найден',
      };

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) throw new Error('Неверный пароль');

    const tokens = tokenService.generate({ ...user });

    await tokenService.save(user.id, tokens.refreshToken);

    return { ...tokens, user };
  }

  public async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  public async refresh(refreshToken: string) {
    if (!refreshToken) throw new Error('Не авторизирован');

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) throw new Error(`Invalid refresh token`);

    const user = await userRepository.findById({ id: userData.id });
    const tokens = tokenService.generate({ ...user });

    await tokenService.save(user.id, tokens.refreshToken);

    return { ...tokens, user };
  }

  public async delete(id: IKey) {
    const user = await userRepository.delete({ id });

    return user;
  }

  public async refreshPassword(id: IKey, password: string) {
    const hashPassword = await bcrypt.hash(password, +process.env.BCRYPT_SALT);

    const user = await userRepository.refreshPassword({
      id,
      password: hashPassword,
    });

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
    const user = await userRepository.update(id, data);

    return user;
  }
}

export default new UserService();
