import { Component, Input } from '@angular/core';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NoimagePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() items: any[] = [];
  artistId!: any;
  constructor(private router: Router) {}

  handleArtist(items: any) {
    if (items?.type === 'artist') {
      this.artistId = items?.id;
    } else {
      this.artistId = items?.artist[0]?.id;
    }
    this.router.navigateByUrl(`artist/${this.artistId}`);
  }
}
