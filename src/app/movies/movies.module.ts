import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@NgModule({
  declarations: [MoviesHomeComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],
  exports: []
})
export class MoviesModule { }
