import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './permission.entity';
@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}
  async create(newPermission: CreatePermissionDto): Promise<Permission> {
    try {
      return await this.permissionRepository.save(newPermission);
    } catch (e) {
      catchError(e);
    }
  }

  getAll(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }

  async update(newPermission: UpdatePermissionDto): Promise<any> {
    const permission = await this.permissionRepository.findOne({
      where: { id: newPermission.id },
    });
    if (!permission)
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'PERMISSION_NOT_FOUND',
      });

    try {
      permission.name = newPermission.name;
      return await this.permissionRepository.save(permission);
    } catch (e) {
      catchError(e);
    }
  }

  delete(id: number) : Promise<any> {
      return this.permissionRepository.delete({id});
  }

}
