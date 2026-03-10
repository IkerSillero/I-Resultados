import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://www.thesportsdb.com/api/v1/json/3';

  constructor(private http: HttpClient) {}

  getTeams(leagueName:string){

    return this.http.get(
      `${this.apiUrl}/search_all_teams.php?l=${leagueName}`
    );

  }

}