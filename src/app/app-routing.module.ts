import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { TvShowsHomeComponent } from './tv-shows/tv-shows-home/tv-shows-home.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
