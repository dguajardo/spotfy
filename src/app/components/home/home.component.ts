import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe, NoimagePipe, CardComponent],
  providers: [SpotifyService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  countries: any[] = [];
  newSongs: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
    });
  }

  ngOnInit() {}
}
