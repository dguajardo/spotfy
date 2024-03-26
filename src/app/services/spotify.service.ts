import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}


  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCuo2x4ku4jho8DNG_px1UrEnbB2QIk4_PJhIcdrSttRFZDJA6nFEjwUGNdyNb2Xh9a7wcupE5sP4dzqdbvf8Z7-glPdeqdGmcL-U3gfAasWqHMvVw',
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data);

      });
  }
}
