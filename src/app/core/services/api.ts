import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.besoccer.com'; // ⚠️ Cambiar cuando tengas la API real
  private apiKey = 'TU_API_KEY_AQUI'; // ⚠️ Cambiar cuando tengas la API key

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });
  }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(
      `${this.apiUrl}/competitions`,
      { headers: this.getHeaders() }
    );
  }

  getTeams(leagueId: number) {
    return this.http.get(
      `${this.apiUrl}/teams?league=${leagueId}`,
      { headers: this.getHeaders() }
    );
  }

  getPlayers(teamId: number) {
    return this.http.get(
      `${this.apiUrl}/players?team=${teamId}`,
      { headers: this.getHeaders() }
    );
  }
}