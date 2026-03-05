import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Films:';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are finding film after ${searchingYear} year`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `One film with id ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This funvtion delete film with id ${movieId}`;
  }
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
