import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDJAzqbV3Sy5iIs_xJOtHCRlzpR9hLHrB6pNJ1m84axCxlwiz4x3yzIoqerKitXG7tPaD-dsZuf5DarRr_jFUacs73Mv9DsBeBAg9Xx169wIhBwyuQ',
    });
    return this.http.get(url, { headers: headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }
  getArtists(word: string) {
    return this.getQuery(`search?q=${word}&type=artist`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  getArtist(id: any) {
    return this.getQuery(`artists/${id}`);
    //   .pipe(
    //   map((data: any) => data['artists'].items)
    // );
  }
}
