import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from  './movie-list/movie-list.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie/:slug', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
