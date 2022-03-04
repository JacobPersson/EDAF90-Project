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

  watchButton: string[] = [''];
  watchIcon: string[] = [''];
  watch: number = 0;
  rateButton: string = 'Rate';
  // breakpoint: number = 0;

  constructor(private watchlist: WatchlistService) {}

  ngOnInit(): void {}

  // ngOnInit() {
  //     this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  // }

  // onResize(event: any) {
  //   this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  // }

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

  addToWatchlist(movie: movie, i: number) {
    this.watchlist.addToWatchlist(movie);
    if (this.watch === 0) {
      this.watch++;
      this.watchButton[i] = 'Remove from Watchlist';
      this.watchIcon[i] = 'bookmark';
    } else {
      this.watch--;
      this.watchButton[i] = 'Add to Watchlist';
      this.watchIcon[i] = 'bookmark_border';
    }
  }

  createWatchlistButton(i: number) {
    this.watchButton[i] = 'Add To Watchlist';
    this.watchIcon[i] = 'bookmark_border';
    return this.watchButton[i];
  }

  bigPlot(plot: string) {
    if (plot.length > 200) {
      let temp = plot.substring(0, 200) + '...';
      return temp;
    } else {
      return plot;
    }
  }
}
