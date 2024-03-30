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
        'Bearer BQAaPQVo_Tnv5czdh3OcbxdpjyLVQI4LASCPOiXn6ERVibURCYiIw7p-am81tPEkGP51GO7OLg099BBPBNZjk0_Y8DKtfGqfQKDLH_4z4X5O7Dctj9s',
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
  }

  getTopTracks(id: any) {
    return this.getQuery(`artists/${id}/top-tracks`).pipe(
      map((data: any) => data['tracks'])
  )};

}
