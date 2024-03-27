import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss',
})
export class ArtistComponent {
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string) {
    if (!id) {
      console.error('Artist ID is undefined.');
      return;
    }
    this.spotify.getArtist(id)?.subscribe((artist) => {
      console.log(artist),
        (error: any) => {
          console.error('Error fetching artist:', error);
        };
    });
  }
}
