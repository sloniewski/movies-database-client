import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = 'http://localhost:8000/api/movie/'

  constructor(private http: HttpClient) { }


  getMovies () {
    let movies  = this.http.get(this.moviesUrl)
    console.log(movies.subscribe())
    return [
      {
        title: 'test_1',
        year: 2005
      },
      {
        title: 'test_2',
        year: 2011
      }
    ]
  }
}