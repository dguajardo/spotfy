import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  newArtists: any[] = [];
  constructor(private spotify: SpotifyService) {}
  search(word: string) {
    console.log(word);
    this.spotify.getArtist(word).subscribe((data: any) => {
      this.newArtists = data;
      console.log(this.newArtists);
    });
  }
}
