import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieComponent as movie } from './movie/movie.component';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  items: movie[] = [];

  constructor() {
    let movies = window.localStorage.getItem("movies");

    if (movies !== null) {
      JSON.parse(movies).map((e: movie) => {
        this.addToWatchlist(e);
      });
    }
  }

  addToWatchlist(movie: movie) {
    window.localStorage.setItem("movies", JSON.stringify([...this.items, movie]));

    this.items.push(movie);
  }

  removeFromWatchlist(movie: movie) {
    let idx = this.items.indexOf(movie);
    this.items.splice(idx, 1);

    // Ta bort från localStorage
  }

  getWatchlist() {
    return this.items;
  }

  clearWatchlist() {
    this.items = [];
    console.log(this.items);
  }
}
