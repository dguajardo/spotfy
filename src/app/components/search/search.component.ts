import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { CardComponent } from '../card/card.component';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NoimagePipe, CardComponent, LoaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  newArtists: any[] = [];
  loading!: boolean;

  constructor(private spotify: SpotifyService) {}
  search(word: string) {
    this.loading = true;
    this.spotify.getArtists(word).subscribe((data: any) => {
      this.newArtists = data;
      this.loading = false;
    });
  }
}
