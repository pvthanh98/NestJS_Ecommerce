import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({ email: email });
  }
  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: ['email', 'id', 'typeAccount', 'name', 'phoneNumber'],
    });
  }

  async createUser(userBody: CreateUserDto): Promise<any> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(userBody.password, salt);
    userBody.salt = salt;
    userBody.password = hash;
    try {
      const {password, salt, ...result} =  await this.usersRepository.save(userBody);
      return result;
    } catch (e) {
      throw new NotImplementedException({
        code: e.code,
        message: 'NOT_IMPLEMENT_SQL',
      });
    }
  }

  deleteUser(id: number): Promise<any> {
    return this.usersRepository.delete({ id });
  }

  async updateUser(user: UpdateUserDto): Promise<any> {
    const userFind = await this.usersRepository.findOne(user.id);
    if (userFind) {
      userFind.name = user.name;
      userFind.typeAccount = user.typeAccount; 
      userFind.phoneNumber = user.phoneNumber;
      const {password , salt, ...result} = await this.usersRepository.save(userFind);
      return result;
    } else
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'USER_NOT_FOUND',
      });
  }
}
