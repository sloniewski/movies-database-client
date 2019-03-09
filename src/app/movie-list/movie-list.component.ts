import { Component, OnInit } from '@angular/core';
import { MovieService, MovieItem } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: MovieItem[]

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      (response) => this.movies = response.results
    );
  }
}

