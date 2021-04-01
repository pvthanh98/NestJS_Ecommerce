import { Body, Controller, Get, Post, UseGuards, Delete, Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DeleteUserDto } from './dto/delete-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body(ValidationPipe) userBody: CreateUserDto) {
    return this.userService.createUser(userBody);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser (@Body(ValidationPipe) userId: DeleteUserDto){
    return this.userService.deleteUser(userId.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateUser (@Body(ValidationPipe) user: UpdateUserDto) {
    return this.userService.updateUser(user);
  }
  
}
