import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Films:';
  }

  @Get('/:id')
  getOne() {
    return 'film';
  }
}
