import { Component } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private movieService: MovieService) { }
  public movie = new Movie();
  public movies: Movie[]=[];
  public showForm: boolean = false;
  public show_error: boolean = false;
  public showMovieListing: boolean = true;
  ngOnInit() {
    this.listMovies();
  }

  listMovies() {
    this
      .movieService
      .getMovies()
      .subscribe((data: any) => {
        this.resetMoviesList();
        data.movies.forEach(movie => {
          let runtime_obj = new Movie();
          this.movie = runtime_obj;
          this.movies.push(this.movie.load_from_api(movie));
        });
      });
  }

  saveMovie(movie) {
    this.show_error = false;
    if(this.validMovie(movie)){
      this
        .movieService
        .createMovie(movie)
        .subscribe((data: any) => {
          this.resetMoviesList();
          data.movies.forEach(movie => {
            let runtime_obj = new Movie();
            this.movie = runtime_obj;
            this.movies.push(this.movie.load_from_api(movie));
          });
        });
      this.hideMovieForm();
    } else {
      this.show_error = true;
    }
  }

  validMovie(movie){
    if(movie.name.length > 0 && movie.year_released > 0 && movie.rating > 0){
      return true;
    }
    return false;
  }

  updateMovie(movie) {
    this
      .movieService
      .updateMovie(movie)
      .subscribe((data: any) => {
        this.resetMoviesList();
        data.movies.forEach(movie => {
          let runtime_obj = new Movie();
          this.movie = runtime_obj;
          this.movies.push(this.movie.load_from_api(movie));
        });
      });
  }

  showMovieForm() {
    this.showForm = !this.showForm;
    this.showMovieListing = false;
    this.movie = new Movie();
  }

  hideMovieForm() {
    this.showForm = !this.showForm;
    this.showMovieListing = true;
    this.show_error = false;
    this.movie = new Movie();
  }

  resetMoviesList() {
    this.movies = []
  }

  deleteMovie(id) {
    this
      .movieService
      .deleteMovie(id)
      .subscribe((data: any) => {
        this.resetMoviesList();
        data.movies.forEach(movie => {
          let runtime_obj = new Movie();
          this.movie = runtime_obj;
          this.movies.push(this.movie.load_from_api(movie));
        });
      });
  }

  getMovie(id) {
    this
      .movieService
      .getMovie(id)
      .subscribe((data: any) => {
        this.movie = this.movie.load_from_api(data);
      });
  }
}
