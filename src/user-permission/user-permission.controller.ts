import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserPermissionDto } from './dto/create.dto';
import {UserPermissionService} from './user-permission.service';
@Controller('user-permission')
export class UserPermissionController {
    constructor(private readonly userPermissionService: UserPermissionService){}
    @Post()
    create(@Body(ValidationPipe) body: CreateUserPermissionDto){
        return this.userPermissionService.create(body);
    }
}
