import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule }from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterLink,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
  ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'spotfy';
}
