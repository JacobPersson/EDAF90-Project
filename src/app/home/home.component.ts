import { Component, OnInit } from '@angular/core';
import { MovieComponent as movie } from '../movie/movie.component';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: movie[] = [];

  constructor(private watchlist: WatchlistService) {}

  ngOnInit(): void {
    /** Fetch featured movies */
    this.fetchCard('tt10872600'); // Spider-Man: No Way Home
    this.fetchCard('tt1877830'); // The Batman
    this.fetchCard('tt14992922'); // Tindersvindlaren
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
    let watch = this.watchlist.getWatchlist().filter((e) => e.imdbID === movie.imdbID);

    if (watch.length > 0) {
      return true;
      console.log(watch);
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

  fetchCard(imdb: string) {
    fetch('https://www.omdbapi.com/?i=' + imdb + '&plot=full&apikey=e530b6c6')
      .then((res) => res.json())
      .then((data) => {
        this.cards.push(data);
      });
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
