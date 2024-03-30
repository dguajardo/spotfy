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
        'Bearer BQCaMWgJ6SFU0swi1pdtacRozwDHNZybZNQ_yAoc607lIMS9i_eYDVIT8R01-iWjwLdJsn0Dhpk_CGL_eFwDoWOAGhIrJBW3RBqwGIQ_wc3t2U2Aw0s',
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
