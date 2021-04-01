import { Body, Controller, Get, Post, UseGuards, Delete, Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './createUser.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IdObjectDto } from './dto/idbody.dto';
import {UpdateUserDto} from './dto/updateUser.dto';
import { TestDto } from "./dto/test.dto";
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
  deleteUser (@Body() userId: IdObjectDto){
    return this.userService.deleteUser(userId.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateUser (@Body() user: UpdateUserDto) {
    return this.userService.updateUser(user);
  }

  @Post("test")
  test(@Body(ValidationPipe) hello: TestDto) {
    console.log(hello)
    return "ok"
  }
  
}
