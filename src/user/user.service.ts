import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './createUser.dto';
import * as bcrypt from 'bcrypt';
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
    return this.usersRepository.find({select:["email","id","typeAccount","name"]});
  }

  async createUser(userBody: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(userBody.password, salt);
    userBody.salt = salt;
    userBody.password = hash;
    return await this.usersRepository.save(userBody);
  }
}
