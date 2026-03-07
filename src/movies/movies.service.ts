import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Film with id: ${id} not found`);
    }
    return movie;
  }
  remove(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
  }
  create(movieData) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }
  patch(id: string, updateData) {
    const movie = this.getOne(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
