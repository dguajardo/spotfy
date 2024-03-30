import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { LoaderComponent } from '../shared/loader/loader.component';
@Component({
  selector: 'app-artist',
  standalone: true,
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss',
  imports: [NoimagePipe, LoaderComponent],
  providers: [SpotifyService]
})
export class ArtistComponent {
  artist: any = {};
  loading!: boolean;
  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService,
    private routeTo: Router
  ) {

    this.router.params.subscribe((params) => {
    this.getArtist(params['id']);
    });

  }

  goToUrl(path: string) {
    this.routeTo.navigateByUrl(path);
  }

  getArtist(id: string) {
    this.loading = true; // TO-DO: loading now showing always
    this.spotify.getArtist(id)?.subscribe((artist) => {
      this.artist = artist;
      this.loading = false;

    });

  }
}
