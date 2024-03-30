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
  constructor(private router: Router) {

  }

  handleArtist(item: any) {
    console.log(item);
    if (item?.type === 'artist') {
      this.artistId = item?.id;
    } else {
      this.artistId = item?.artists[0]?.id;
    }
    this.router.navigate(['/artist', this.artistId]);
  }
}
