import { Component, OnInit } from '@angular/core';
import { MovieComponent as movie } from '../movie/movie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: movie[] = [];

  constructor() { }

  ngOnInit(): void {
    //check_circle_outline

    this.fetchCard("tt10872600");
    this.fetchCard("tt1877830");
    this.fetchCard("tt14992922"); // Tindersvindlaren

  }

  fetchCard(imdb: string) {
    fetch("https://www.omdbapi.com/?i=" + imdb + "&plot=full&apikey=e530b6c6")
      .then(res => res.json())
      .then(data => {
        this.cards.push(data);
      });
  }
}
