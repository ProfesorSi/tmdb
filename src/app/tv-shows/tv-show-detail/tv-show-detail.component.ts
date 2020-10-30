import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
})
export class TvShowDetailComponent implements OnInit {
  @Input() name: string;
  @Input() overview: string;
  @Input() posterPath: string;
  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.overview = params.get('overview');
      this.posterPath = params.get('poster_path');
    });
  }
}
