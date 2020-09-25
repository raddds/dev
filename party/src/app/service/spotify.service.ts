import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private accessToken: string;

  constructor(private http: HttpClient) {}

  saveAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  play() {
    const body = {
      uris: ['spotify:track:0ve9Tpz8Yw0I4eXhWsy21o'],
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accessToken,
      }),
    };
    this.http
      .put('https://api.spotify.com/v1/me/player/play', body, httpOptions)
      .subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log('error: ' + error);
        }
      );
  }
}
