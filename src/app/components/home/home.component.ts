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
  loading!: boolean;
  error!: boolean;
  messageError!: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;


  }

  ngOnInit() {

    this.spotifyGetNewReleases();
  }

  public spotifyGetNewReleases(){
    this.spotify.getNewReleases()
    .subscribe((data: any) => {

      this.newSongs = data;
      this.loading = false;
    }, (errorService) => {

      this.loading = false;
      this.error = true;
      this.messageError = errorService.error.error.message;
      console.log(errorService);
      console.log(errorService.error.error.message)
    });
  }
}
