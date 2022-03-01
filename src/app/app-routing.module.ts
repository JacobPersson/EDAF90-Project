import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewedMoviesComponent } from './viewed-movies/viewed-movies.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieInformationComponent } from './movie-information/movie-information.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'viewed-movies', component: ViewedMoviesComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'movie-information', component: MovieInformationComponent},
  { path: 'watchlist', component: WatchlistComponent},
  { path: '**', component: HomeComponent } // Page not found
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
