import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB-w-OD4FSVFSwBLwpIWOKQOQyqa7VeH7lUIAcwaLV37PcYhNxZuE-XMnQHj0XvZA_o-Bn26k1dWoSbQg9Oss2W4UheRpP3QGMlrhIAIP2ImoPnG0s',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
