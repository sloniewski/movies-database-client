import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: any[] = []

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movies = this.getMovies()
  }

  getMovies() {
    return this.movieService.getMovies()
  }

}
