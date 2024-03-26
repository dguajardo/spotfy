import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
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
