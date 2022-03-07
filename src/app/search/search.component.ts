import { Component, OnInit } from '@angular/core';
import { MovieComponent as movie } from '../movie/movie.component';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: movie[] = [];

  constructor(private watchlist: WatchlistService) {}

  ngOnInit(): void {}

  onSearch(url: string) {
    console.log(url);

    if (url != '') {
      this.fetchSearch(url);
      console.log(this.movies);
    }
  }

  fetchSearch(url: string) {
    fetch('https://www.omdbapi.com/?s=' + url + '&apikey=e530b6c6')
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.Search.length; i++) {
          this.movies.push(data.Search[i]);
        }
      });
  }
}
