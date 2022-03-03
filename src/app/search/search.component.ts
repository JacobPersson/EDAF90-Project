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

  watchButton: string = 'Add To Watchlist';
  watchIcon: string = 'bookmark_border';
  watch: number = 0;
  rateButton: string = 'Rate';

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

  addToWatchlist(movie: movie) {
    this.watchlist.addToWatchlist(movie);
    if (this.watch === 0) {
      this.watch++;
      this.watchButton = 'Remove from Watchlist';
      this.watchIcon = 'bookmark';
    } else {
      this.watch--;
      this.watchButton = 'Add to Watchlist';
      this.watchIcon = 'bookmark_border';
    }
  }
}
