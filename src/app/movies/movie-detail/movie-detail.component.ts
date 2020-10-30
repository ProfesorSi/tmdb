import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movies;
  movieID;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/movie/724089?api_key=043c17422b8795820d9fcd82b4ed3212&language=en-US')
    .subscribe(
      (response) => {
        this.movies = response;
        console.log(this.movies);
      }
    )
  }

}
