import { Body, Controller, Delete, Get, Post, Put, ValidationPipe } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { DeletePermissionDto } from './dto/delete-permission.dto';
@Controller('permission')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService){}
    @Post()
    create(@Body(ValidationPipe) body: CreatePermissionDto) {
        return this.permissionService.create(body);
    }

    @Get()
    getAll() {
        return this.permissionService.getAll();
    }

    @Put()
    update(@Body(ValidationPipe) body: UpdatePermissionDto){
        return this.permissionService.update(body);
    }

    @Delete()
    delete(@Body(ValidationPipe) body: DeletePermissionDto){
        return this.permissionService.delete(body.id);
    }
}
