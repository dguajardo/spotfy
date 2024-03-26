import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NoimagePipe],
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
