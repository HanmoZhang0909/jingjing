import { Controller, Get, Post, Body, UseGuards, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserResponseDto } from './dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string; password: string }) {
    const user = await this.usersService.createUser(body.name, body.email, body.password);
    return new UserResponseDto(user);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map(user => new UserResponseDto(user));
  }
}
