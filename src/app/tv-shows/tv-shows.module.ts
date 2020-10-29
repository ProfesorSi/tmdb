import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsHomeComponent } from './tv-shows-home/tv-shows-home.component';


@NgModule({
  declarations: [TvShowsHomeComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule
  ],
  exports: []
})
export class TvShowsModule { }
