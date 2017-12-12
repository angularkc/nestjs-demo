import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class UsersController {
  @Get('users')
  getAllUsers(req, res, next) {}

  @Get('users/:id')
  getUser(req, res, next) {}

  @Post('users')
  addUser(req, res, next) {}
}