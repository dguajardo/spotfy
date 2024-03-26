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
        'Bearer BQA8XYtAVF8_orNuTS75lrdeEBn0oqLZ4FlMKFs_ovmSztbHO4nip1pZOTEbd5fBS3Wz1leyZ3Aw0NgUGl8hJbJzLL-kTtBObkIbnfV6fSD_SwVMzNM',
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
