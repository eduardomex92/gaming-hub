import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from '../models/platform.model'; // Import the Platform interface
import { map } from 'rxjs/operators'; // Import map operator for filtering

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private JSON_URL = 'assets/games.json'; // path to your JSON file

  constructor(private http: HttpClient) {}

  getAllPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.JSON_URL);
  }

  // fetch games by platform
  getGamesByPlatform(platformName: string): Observable<Platform[]> {
    return this.http.get<{ [key: string]: Platform[] }>(this.JSON_URL).pipe(
      map((data) => data[platformName] || [])
    );
  }

getGameDetails(gameId: string): Observable<Platform | undefined> {
  return this.http.get<{ [key: string]: Platform[] }>(this.JSON_URL).pipe(
    map((platformData) => {
      const allGames = Object.values(platformData).flat();
      console.log('All games:', allGames);

      // Find the game by ID
      return allGames.find((game) => game.id === gameId);
    })
  );
}
}