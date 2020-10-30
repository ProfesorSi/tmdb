import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsHomeComponent } from './tv-shows-home/tv-shows-home.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';


@NgModule({
  declarations: [TvShowsHomeComponent, TvShowDetailComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule
  ],
  exports: []
})
export class TvShowsModule { }
