import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api';

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class TeamsListComponent implements OnInit {

  teams:any[]=[];
  leagueName:string='';

  constructor(
    private route:ActivatedRoute,
    private api:ApiService
  ){}

  ngOnInit(){

    this.leagueName=this.route.snapshot.paramMap.get('id') || '';

    this.api.getTeams(this.leagueName).subscribe((data:any)=>{

      this.teams=data.teams || [];

    });

  }

}