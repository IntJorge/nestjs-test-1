import { Controller, Get, Param, Post, Body, Res, HttpStatus, Header, Delete } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';


@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'This action returns all users';
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a user with id ${id}`;
    }

    @Post()
    async create(@Res() res, @Body() createUserDto: CreateUserDto) {
        res.status(HttpStatus.CREATED).send(createUserDto); 
    }

    @Delete(':id')
    deleteOne(@Param('id') id) {
        return `This action deletes a user with id ${id}`;
    }
}
