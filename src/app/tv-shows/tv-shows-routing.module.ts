import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { TvShowsHomeComponent } from './tv-shows-home/tv-shows-home.component';

const routes: Routes = [
  {
    path: 'tvShows',
    component: TvShowsHomeComponent
  },
  {
    path: 'tvShowDetail',
    component: TvShowDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule { }
