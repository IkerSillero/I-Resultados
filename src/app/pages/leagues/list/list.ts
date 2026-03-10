import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leagues-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class LeaguesListComponent {

  leagues = [

    {
      name: 'La Liga',
      apiName: 'La Liga',
      logo: 'https://images.seeklogo.com/logo-png/48/2/la-liga-logo-png_seeklogo-480414.png'
    },

    {
      name: 'Premier League',
      apiName: 'Premier League',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg'
    },

    {
      name: 'Serie A',
      apiName: 'Serie A',
      logo: 'https://www.kindpng.com/picc/m/25-254792_serie-a-logo-png-transparent-png.png'
    },

    {
      name: 'Bundesliga',
      apiName: 'Bundesliga',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg'
    },

    {
      name: 'Ligue 1',
      apiName: 'Ligue 1',
      logo: 'https://logos-world.net/wp-content/uploads/2024/06/Ligue-1-Logo-New.png'
    }

  ];

}