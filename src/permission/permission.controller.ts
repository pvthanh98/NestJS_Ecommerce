import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { DeletePermissionDto } from './dto/delete-permission.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) body: CreatePermissionDto) {
    return this.permissionService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.permissionService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body(ValidationPipe) body: UpdatePermissionDto) {
    return this.permissionService.update(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  delete(@Body(ValidationPipe) body: DeletePermissionDto) {
    return this.permissionService.delete(body.id);
  }
}
