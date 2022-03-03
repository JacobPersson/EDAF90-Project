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
  info: movie[] = [];
  ratings: string[] = [];

  watchButton: string = 'Add To Watchlist';
  watchIcon: string = 'bookmark_border';
  watch: number = 0;
  rateButton: string = 'Rate';

  constructor(private router: Router, private watchlist: WatchlistService) {}

  ngOnInit(): void {
    let url = this.router.url;
    let urlArray = url.split('/');
    this.fetchFullInfo(urlArray[2]);

    this.ratings.push(this.info[0].Ratings[0]);
    console.log(this.ratings);
  }

  fetchFullInfo(url: string) {
    fetch('https://www.omdbapi.com/?t=' + url + '&plot=full&apikey=e530b6c6')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.info.push(data);
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
