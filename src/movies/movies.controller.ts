import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Films:';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `One film with id ${movieId}`;
  }

  @Post()
  create() {
    return 'This function create new film';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This funvtion delete film with id ${movieId}`;
  }
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This function will  edit film with id ${movieId}`;
  }
}
