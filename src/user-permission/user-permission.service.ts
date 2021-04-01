import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPermission } from './user-permission.entity';
import { CreateUserPermissionDto } from './dto/create.dto';
@Injectable()
export class UserPermissionService {
  constructor(
      @InjectRepository(UserPermission)
      private usePermissionRepository: Repository<UserPermission>
  ) {}

  async create(userPermission: CreateUserPermissionDto) : Promise<any> {
      return await this.usePermissionRepository.save(userPermission);
  }
}
