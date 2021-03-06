import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesHomeComponent
  },
  {
    path: 'movieDetail/:title/:overview/:poster_path',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
