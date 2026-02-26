import { Routes } from '@angular/router';
import { LeaguesListComponent } from './pages/leagues/list/list';

export const routes: Routes = [
  { path: '', redirectTo: 'leagues', pathMatch: 'full' },

  { path: 'leagues', component: LeaguesListComponent },

  {
    path: 'leagues/:id',
    loadComponent: () =>
      import('./pages/leagues/detail/detail').then(m => m.LeagueDetailComponent)
  },

  {
    path: 'teams',
    loadComponent: () =>
      import('./pages/teams/detail/detail').then(m => m.TeamDetailComponent)
  },
  {
    path: 'players',
    loadComponent: () =>
      import('./pages/players/detail/detail').then(m => m.PlayerDetailComponent)
  },
  {
    path: 'matches',
    loadComponent: () =>
      import('./pages/matches/list/list').then(m => m.MatchesListComponent)
  },

  { path: '**', redirectTo: 'leagues' }
];