import { Component, OnInit } from '@angular/core';
import { MovieComponent as movie } from '../movie/movie.component';
import { MovieInformationComponent } from '../movie-information/movie-information.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  fetchSearch(url: string){
    fetch("https://www.omdbapi.com/?s=" + url + "&apikey=e530b6c6")
      .then(result => result.json())
      .then(res => {
        for (let i = 0; i < 10; i++) {
          //this.movies.push({

          //  });
        }
      });
  }
}
