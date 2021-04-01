import { Module } from '@nestjs/common';
import { UserPermissionController } from './user-permission.controller';
import { UserPermissionService } from './user-permission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermission  } from "./user-permission.entity";
@Module({
  imports:[TypeOrmModule.forFeature([UserPermission])],
  controllers: [UserPermissionController],
  providers: [UserPermissionService]
})
export class UserPermissionModule {}
