import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showcase-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase-marquee.component.html',
})
export class ShowcaseMarqueeComponent {
  @Input({ required: true }) items: string[] = [];

  get loopedItems(): string[] {
    return [...this.items, ...this.items];
  }
}
