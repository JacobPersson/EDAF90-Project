import { Injectable } from '@angular/core';
import { MovieComponent as movie } from './movie/movie.component';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  items: movie[] = [];

  constructor() { }

  addToWatchlist(movie: movie) {
    console.log(this.items);
    this.items.push(movie);
  }

  getWatchlist() {
    return this.items;
  }

  clearWathlist() {
    this.items = [];
    return this.items;
  }
}
