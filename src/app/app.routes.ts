import { Routes } from '@angular/router';
import { LeaguesListComponent } from './pages/leagues/list/list';

export const routes: Routes = [

  // redirección inicial
  {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full'
  },

  // lista de ligas
  {
    path: 'leagues',
    component: LeaguesListComponent
  },

  // equipos de una liga
  {
    path: 'leagues/:id',
    loadComponent: () =>
      import('./pages/teams/list/list')
        .then(m => m.TeamsListComponent)
  },

  // página no encontrada
  {
    path: '**',
    redirectTo: 'leagues'
  }

];