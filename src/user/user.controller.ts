import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './createUser.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser() {
    const user = this.userService.findOne("pvthanh98it@gmail.com");
    return user;
  }

  @Post()
  createUser(@Body() userBody: CreateUserDto) {
    return this.userService.createUser(userBody);
  }
}

