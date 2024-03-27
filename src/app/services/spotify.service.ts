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
        'Bearer BQDVu0CrTtCQsHDaEscDZ_t8wJc1lz4F2Lwu1tWEKTRHyGIRrkK6IBvwM6rCbn2NaLVDM6T3Hqlw075tI2OglmHZXDCmYKs_Dy7JhNOGdmBkaBryf-E',
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
