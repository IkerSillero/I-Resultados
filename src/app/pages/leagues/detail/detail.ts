import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html'
})
export class LeagueDetailComponent {

  leagueId!: string;

  constructor(private route: ActivatedRoute) {
    this.leagueId = this.route.snapshot.paramMap.get('id')!;
  }
}