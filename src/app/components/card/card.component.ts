import { Component, Input } from '@angular/core';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NoimagePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() items: any[] = [];
}
