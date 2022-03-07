import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieComponent as movie } from '../movie/movie.component';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.css'],
})
export class MovieInformationComponent implements OnInit {
  info: movie = new movie();

  watchButton: string = 'Add To Watchlist';
  watchIcon: string = 'bookmark_border';
  watch: number = 0;
  rateButton: string = 'Rate';

  constructor(private router: Router, private watchlist: WatchlistService) {}

  ngOnInit(): void {
    let url = this.router.url;
    let urlArray = url.split('/');
    this.fetchFullInfo(urlArray[2]);
  }

  fetchFullInfo(url: string) {
    fetch('https://www.omdbapi.com/?t=' + url + '&plot=full&apikey=e530b6c6')
      .then((res) => res.json())
      .then((data) => {
        this.info = data;
      });
  }

  handleButton(movie: movie) {
    let watch = this.handleWatch(movie);
    if (!watch) {
      this.watchlist.addToWatchlist(movie);
    } else {
      this.watchlist.removeFromWatchlist(movie);
    }
  }

  handleWatch(movie: movie) {
    let watch = this.watchlist
      .getWatchlist()
      .filter((e) => e.imdbID === movie.imdbID);

    if (watch.length > 0) {
      return true;
    }

    return false;
  }

  viewButton(movie: movie, a: string) {
    let button = this.handleWatch(movie);

    if (a === 'button') {
      if (button) {
        return 'Remove from Watchlist';
      }

      return 'Add to Watchlist';
    } else {
      if (button) {
        return 'bookmark';
      }

      return 'bookmark_border';
    }
  }
}
