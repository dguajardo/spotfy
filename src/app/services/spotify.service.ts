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
        'Bearer BQAMUiYZ8zsMIQf5akqtnVVwjX28I4juym-UQ8Gsu1jw23IFl6bZ1e65NGc3OeW9FTZdpi9XII3OzecUXswQLzV6pA22Z_4OgRmaXzqWYa4IHFlbxU0',
    });
    return this.http.get(url, { headers: headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }
  getArtist(word: string) {
    return this.getQuery(`search?q=${word}&type=artist`).pipe(
      map((data: any) => data['artists'].items)
    );
  }
}
