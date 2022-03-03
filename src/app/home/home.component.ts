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

  watchButton: string = 'Add To Watchlist';
  watchIcon: string = 'bookmark_border';
  watch: number = 0;
  rateButton: string = 'Rate';

  constructor(private watchlist: WatchlistService) {}

  ngOnInit(): void {
    //check_circle_outline

    this.fetchCard('tt10872600');
    this.fetchCard('tt1877830');
    this.fetchCard('tt14992922'); // Tindersvindlaren
  }

  fetchCard(imdb: string) {
    fetch('https://www.omdbapi.com/?i=' + imdb + '&plot=full&apikey=e530b6c6')
      .then((res) => res.json())
      .then((data) => {
        this.cards.push(data);
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
      this.watchIcon = 'bookmark_border'
    }
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
