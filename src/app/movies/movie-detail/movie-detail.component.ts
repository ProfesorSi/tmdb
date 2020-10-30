import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() title: string;
  @Input() overview: string;
  @Input() voteAverage: string;
  @Input() posterPath: string;
  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title');
      this.overview = params.get('overview');
      this.posterPath = params.get('poster_path')
    });
  }
}
