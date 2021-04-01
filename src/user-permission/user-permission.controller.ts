import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserPermissionDto } from './dto/create.dto';
import { FindPermissionByUserId } from './dto/param-get-permission-by-id.dto';
import { UserPermissionService } from './user-permission.service';
import { DeleteUserPermissionByUserIdDto } from './dto/delete-by-user-id.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user-permission')
export class UserPermissionController {
  constructor(private readonly userPermissionService: UserPermissionService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) body: CreateUserPermissionDto) {
    return this.userPermissionService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userPermissionService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-id/:id')
  getPermissionByUserId(@Param() params: FindPermissionByUserId) {
    return this.userPermissionService.getPermissionByUserId(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteByUserId(@Body(ValidationPipe) body: DeleteUserPermissionByUserIdDto) {
    return this.userPermissionService.deleteByUserId(body.userId);
  }
}
