import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowsHomeComponent } from './tv-shows-home/tv-shows-home.component';

const routes: Routes = [
  {
    path: 'tvShows',
    component: TvShowsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule { }
