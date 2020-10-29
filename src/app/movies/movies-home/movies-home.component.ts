import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {
  movies;
  listOfMovies = [];
  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=043c17422b8795820d9fcd82b4ed3212&language=en-US&page=1')
    .toPromise()
    .then((data) => {
      this.movies = data;
      this.listOfMovies = this.movies.results;
     console.log(this.listOfMovies);
    }); 
  }
}
