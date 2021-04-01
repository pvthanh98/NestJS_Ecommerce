import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPermission } from './user-permission.entity';
import { CreateUserPermissionDto } from './dto/create.dto';
@Injectable()
export class UserPermissionService {
  constructor(
    @InjectRepository(UserPermission)
    private usePermissionRepository: Repository<UserPermission>,
  ) {}

  create(userPermission: CreateUserPermissionDto): Promise<UserPermission> {
    return this.usePermissionRepository.save(userPermission);
  }

  getAll(): Promise<UserPermission[]> {
    return this.usePermissionRepository
      .createQueryBuilder('user_permission')
      .select(['user_permission.id', 'user.id','user.name',"permission"])
      .leftJoin('user_permission.user', 'user')
      .leftJoin("user_permission.permission","permission")
      .getMany();
  }

  getPermissionByUserId (userId: number): Promise<UserPermission[]> {
    return this.usePermissionRepository.find({where:{userId}});
  }

  deleteByUserId(userId: number): Promise<any> {
    return this.usePermissionRepository.delete({userId})
  }

}
