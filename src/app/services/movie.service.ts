import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = 'http://localhost:8000/api/movie/'

  constructor(private http: HttpClient) { }


  getMovies () {
    let movies = this.http.get<MovieListResponse>(this.moviesUrl)
    return movies
  }
}

export class MovieItem {
  title: string
  year: number
  url: string
  rating: number
}

class MovieListResponse {
  count: number
  previous: string
  next: string
  results: MovieItem[]
}

