import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  Title: string = '';
  year: number = 0;
  rated: string = '';
  released: Date = new Date(0);
  runtime: string = '';
  genre: string[] = [];
  director: string[] = [];
  writer: string[] = [];
  Actors: string[] = [];
  Plot: string = '';
  language: string = '';
  country: string = '';
  awards: string = '';
  Poster: string = '';
  ratings: string [] = [];
  metascore: number = 0;
  imdbRating: number = 0;
  imdbVotes: string = '';
  imdbID: string = '';
  type: string = '';
  dvd: Date = new Date(0);
  boxOffice: string = '';

}
