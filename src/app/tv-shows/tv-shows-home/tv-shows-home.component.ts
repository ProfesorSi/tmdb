import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows-home',
  templateUrl: './tv-shows-home.component.html',
  styleUrls: ['./tv-shows-home.component.css']
})
export class TvShowsHomeComponent implements OnInit {
  tvShows;
  listOfTvShows = [];
  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=043c17422b8795820d9fcd82b4ed3212&language=en-US&page=1')
    .toPromise()
    .then((data) => {
      this.tvShows = data;
      this.listOfTvShows = this.tvShows.results;
      console.log(this.listOfTvShows);
    })
  }

}
