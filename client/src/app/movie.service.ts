import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //url = 'https://safe-taiga-53298.herokuapp.com/api/v1';
  url = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) { }

  getMovies() {
    return this
      .http
      .get(this.url+'/movies.json');
  }

  getMovie(id: any) {
    return this
      .http
      .get(this.url+'/movies/'+id);
  }

  createMovie(movie) {
    return this.http.post(this.url+'/movies/', {
      "name": movie.name,
      "year_released": movie.year_released,
      "rating": movie.rating
    });
  }

  updateMovie(movie) {
    return this.http.put(this.url+'/movies/'+movie.id, {
        "name": movie.name,
        "year_released": movie.year_released,
        "rating": movie.rating
      });
  }

  deleteMovie(id) {
    return this
      .http
      .delete(this.url+'/movies/'+id);
  }
}
