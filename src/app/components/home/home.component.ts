import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { CardComponent } from '../card/card.component';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, NoimagePipe, CardComponent, LoaderComponent],
  providers: [SpotifyService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  countries: any[] = [];
  newSongs: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
